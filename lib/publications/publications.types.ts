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