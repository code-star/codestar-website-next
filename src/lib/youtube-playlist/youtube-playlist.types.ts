interface IThumbnail {
  url?: string;
  width?: number;
  height?: number;
}

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
        default: IThumbnail;
        medium: IThumbnail;
        // high, standard, maxres
      };
    };
  }>;
}

export interface IPlaylistItem {
  id: string;
  publishedAt: string;
  title: string;
  description: string[];
  thumbnails?: {
    default?: IThumbnail;
    medium?: IThumbnail;
  };
}
