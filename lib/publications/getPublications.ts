import { XMLParser } from "fast-xml-parser";

// const GET_PUBLICATIONS_URL = "https://medium.com/feed/codestar-blog";
const GET_PUBLICATIONS_URL = "http://localhost:5003/medium.com/feed/codestar-blog";

const GET_PAST_EVENTS_URL =
  "https://api.meetup.com/Codestar-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past&fields=featured_photo";

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

export const getPublications = async (): Promise<IPublication[] | null> => {
  try {
    const response = await fetch(GET_PUBLICATIONS_URL);
    // const response = await fetch(GET_PAST_EVENTS_URL);
    const parser = new XMLParser();
    console.log(GET_PUBLICATIONS_URL, response.status, response.statusText);
    // return [];
    if (response.ok) {
      const text = await response.text();
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
    } else {
      console.log(
        "Publications response not ok",
        response.status,
        response.statusText
      );
      return null;
    }
  } catch (err) {
    console.error("error: " + err);
    return null;
  }
};
