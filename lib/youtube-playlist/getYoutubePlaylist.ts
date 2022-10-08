import { IPlaylistItem, IPlaylistResponse } from "./youtube-playlist.types";

export const getYoutubePlaylist = async (): Promise<
  Array<IPlaylistItem> | undefined
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
      console.log("getYoutubePlaylist not ok");
      return;
    }
  } catch (err) {
    console.log("error: " + err);
    return;
  }
};
