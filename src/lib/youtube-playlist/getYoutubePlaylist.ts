import { IPlaylistItem, IPlaylistResponse } from "./youtube-playlist.types";

export const getYoutubePlaylist = async (): Promise<
  Array<IPlaylistItem> | null
> => {
  const { YOUTUBE_API_KEY, YOUTUBE_PLAYLIST_ID } = process.env;
  const count = 5;
  const YOUTUBE_PLAYLIST_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&key=${YOUTUBE_API_KEY}&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=${count}`;

  try {
    const response = await fetch(YOUTUBE_PLAYLIST_URL);
    if (response.ok) {
      const playlist: IPlaylistResponse = await response.json();
      const items = playlist.items.map((item) => ({
        id: item.contentDetails.videoId,
        publishedAt: new Date(item.contentDetails.videoPublishedAt).toString(),
        title: item.snippet.title,
        description: item.snippet.description
          ? item.snippet.description.split("\n")
          : [],
        thumbnails: item.snippet.thumbnails,
      }));
      return items;
    } else {
      // TODO highlight titles on hover for playlist items and meetups
      console.log("getYoutubePlaylist not ok");
      return [
        {
          id: "1",
          publishedAt: "123",
          title: "failure",
          description: [],
          thumbnails: {
            default: {
              url: "",
              width: 100,
              height: 100,
            },
            medium: {
              url: "",
              width: 100,
              height: 100,
            },
          },
        },
      ];
    }
  } catch (err) {
    console.log("error: " + err);
    return null;
  }
};
