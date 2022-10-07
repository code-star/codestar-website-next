import { request as httpsRequest } from "https";
import { XMLParser } from "fast-xml-parser";

const GET_PUBLICATIONS_URL = "https://medium.com/feed/codestar-blog";

export interface IMediumRSSResponse {
  rss: {
    channel: {
      item: Array<{
        guid: string;
        title: string;
        pubDate: string;
        link: string;
        "dc:creator": string;
        "content:encoded": string;
      }>;
    };
  };
}

export interface IPublication {
  id: string;
  title: string;
  author: string;
  latestPublishedAt: string;
  uniqueSlug: string;
  paragraphs: string;
}

// Workaround for 503 when calling medium.com feed with Fetch API
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

export const getPublications = async (): Promise<IPublication[] | null> => {
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
      paragraphs: "",
      // paragraphs: publication["content:encoded"],
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
    return null;
  }
};
