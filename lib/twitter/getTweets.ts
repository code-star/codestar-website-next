// import { IPlaylistItem, IPlaylistResponse } from "./youtube-playlist.types";

interface ITwitterUserResponse {
  data: { id: string; name: string; username: string };
}

interface ITweetsResponse {
  data: { id: string; text: string; created_at: string }[];
  includes: { users: { username: string }[] };
}

export interface ITweets {
  data: { id: string; text: string; created_at: string }[];
  author: { username: string };
}

const TWITTER_API_USERS_URL = "https://api.twitter.com/2/users/by/username/";

const getTwitterApiTweetsUrl = (userId: string, maxResults: number) =>
  `https://api.twitter.com/2/users/${userId}/tweets?max_results=${maxResults}&expansions=author_id&tweet.fields=created_at,author_id&user.fields=profile_image_url`;

const getUserId = async (
  TWITTER_ACCESS_TOKEN: string,
  TWITTER_USER_NAME: string
): Promise<string | undefined> => {
  try {
    const response = await fetch(
      `${TWITTER_API_USERS_URL}${TWITTER_USER_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${TWITTER_ACCESS_TOKEN}`,
        },
      }
    );
    if (response.ok) {
      const user: ITwitterUserResponse = await response.json();
      const { id } = user.data;
      return id;
    } else {
      console.log("getUserId not ok");
      return;
    }
  } catch (err) {
    return;
  }
};

export const getTweets = async (): Promise<ITweets | null> => {
  const { TWITTER_ACCESS_TOKEN, TWITTER_USER_NAME } = process.env;
  const count = 2;
  /* Twitter API expects maxResults between 5 and 100 */
  const maxResults = 5;

  if (!TWITTER_ACCESS_TOKEN || !TWITTER_USER_NAME) {
    console.log("getTweets envars not set");
    return null;
  }

  try {
    const userId = await getUserId(TWITTER_ACCESS_TOKEN, TWITTER_USER_NAME);
    if (!userId) {
      throw Error(`no user id found for ${TWITTER_USER_NAME}`);
    }
    const response = await fetch(getTwitterApiTweetsUrl(userId, maxResults), {
      headers: {
        Authorization: `Bearer ${TWITTER_ACCESS_TOKEN}`,
      },
    });
    if (response.ok) {
      const tweets: ITweetsResponse = await response.json();
      return {
        data: tweets.data.slice(0, count),
        author: tweets.includes.users[0],
      };
    } else {
      console.log("getTweets not ok", response);
      return null;
    }
  } catch (err) {
    console.log("error: " + err);
    return null;
  }
};
