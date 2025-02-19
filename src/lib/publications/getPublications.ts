import { request as httpsRequest } from "https";
import { XMLParser } from "fast-xml-parser";
import { IPublication, IMediumRSSResponse } from "./publications.types";
import fs from "node:fs";
import path from "node:path";

const GET_PUBLICATIONS_URL = "https://medium.com/feed/codestar-blog";

// TODO: Remove this Workaround for 503 when calling medium.com feed with Fetch API
const requestXmlString = (url: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const request = httpsRequest(url, (response) => {
      let data = "";
      response.on("data", (chunk) => {
        data = data + chunk.toString();
      });

      response.on("end", () => {
        resolve(data);
      });
    });

    request.on("error", (error) => {
      console.log("An error", error);
      reject("Error on httpsRequest");
    });

    request.end();
  });
};

export const getMediumPublications = async (): Promise<IPublication[]> => {
  try {
    const text: string = (await requestXmlString(
      GET_PUBLICATIONS_URL
    )) as string;
    // const response = await fetch(GET_PUBLICATIONS_URL);
    const parser = new XMLParser();
    // if (response.ok) {
    //   const text = await response.text();
    const jsonObj: IMediumRSSResponse = parser.parse(text);
    const publications = jsonObj.rss.channel.item;
    const simplePosts: IPublication[] = publications.map((publication) => ({
      id: publication.guid,
      title: publication.title,
      author: publication["dc:creator"],
      latestPublishedAt: publication.pubDate,
      uniqueSlug: publication.link,
      paragraphs: publication["content:encoded"] || "",
    }));

    return simplePosts;
    // } else {
    //   console.log(
    //     "Publications response not ok",
    //     response.status,
    //     response.statusText
    //   );
    //   return null;
    // }
  } catch (err) {
    console.error("error: " + err);
    return [];
  }
};

type Metadata = {
  title: string;
  author: string;
  publishedAt: string;
  summary: string;
};

function parseFrontmatter(fileContent: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);
  const frontMatterBlock = match![1];
  const content = fileContent.replace(frontmatterRegex, "").trim();
  const frontMatterLines = frontMatterBlock.trim().split("\n");
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(": ");
    let value = valueArr.join(": ").trim();
    value = value.replace(/^['"](.*)['"]$/, "$1"); // Remove quotes
    metadata[key.trim() as keyof Metadata] = value;
  });

  return { metadata: metadata as Metadata, content };
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });
}

export const getBlogPosts = (): IPublication[] => {
  return getMDXData(
    path.join(process.cwd(), "src", "app", "articles")
  ).map<IPublication>((m) => ({
    id: m.slug,
    author: m.metadata.author,
    uniqueSlug: "/articles/" + m.slug,
    title: m.metadata.title,
    latestPublishedAt: m.metadata.publishedAt,
    paragraphs: m.content,
  }));
};

export const getPublications = async (): Promise<IPublication[] | null> => {
  try {
    const blogPosts = getBlogPosts();
    const mediumPublications = await getMediumPublications();

    return blogPosts
      .concat(mediumPublications)
      .sort((publication, otherPublication) => {
        const date = new Date(publication.latestPublishedAt);
        const otherDate = new Date(otherPublication.latestPublishedAt);
        return otherDate.getTime() - date.getTime();
      });
  } catch (err) {
    console.error("error: " + err);
    return null;
  }
};
