export interface IPlaylistResponse {
  items: Array<{
    contentDetails: {
      videoId: string;
      videoPublishedAt: string;
    };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        // medium, high, standard, maxres
      };
    };
  }>;
}

export interface IPlaylistItem {
  id: string;
  publishedAt: string;
  title: string;
  description: string[];
  thumbnails: {
    default: {
      url: string;
      width: number;
      height: number;
    };
  };
}
