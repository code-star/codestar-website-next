import { convert } from "html-to-text";

interface IMastodonAccountResponse {
  id: string;
  username: string;
  acct: string;
  display_name: string;
  created_at: string; // 'yyyy-mm-ddT00:00:00.000Z',
  note: string; // html
  url: string;
  avatar: string;
  avatar_static: string;
  header: string;
  header_static: string;
  followers_count: number;
  following_count: number;
  statuses_count: number;
  last_status_at: string; // yyyy-mm-dd
}

interface ITootResponse {
  id: string;
  created_at: string; // 'yyyy-mm-ddT00:00:00.000Z',
  url: string;
  replies_count: number;
  reblogs_count: number;
  favourites_count: number;
  content: string; // html
  account: IMastodonAccountResponse;
}

type AccountsStatusesResponse = ITootResponse[];

interface IToot {
  id: string;
  text: string;
  created_at: string;
  url: string;
  reblogs_count: number;
  replies_count: number;
  favourites_count: number;
}

export interface IToots {
  data: IToot[];
  author: { username: string; url: string };
}

const MASTODON_API_ACCOUNTS_URL = "https://mastodon.social/api/v1/accounts/";

const getTootsById = async (
  MASTODON_ACCESS_TOKEN: string,
  MASTODON_ID: string
): Promise<AccountsStatusesResponse | undefined> => {
  try {
    const response = await fetch(
      `${MASTODON_API_ACCOUNTS_URL}${MASTODON_ID}/statuses`,
      {
        headers: {
          Authorization: `Bearer ${MASTODON_ACCESS_TOKEN}`,
        },
      }
    );
    if (response.ok) {
      const toots: AccountsStatusesResponse = await response.json();
      return toots;
    } else {
      console.log("getTootsById not ok");
      return;
    }
  } catch {
    return;
  }
};

const mapTootResponseToToot = ({
  id,
  created_at,
  content,
  url,
  reblogs_count,
  replies_count,
  favourites_count,
}: ITootResponse): IToot => ({
  id,
  created_at,
  url,
  text: convert(content, {
    wordwrap: 130,
    selectors: [{ selector: "a", options: { ignoreHref: true } }],
  }),
  replies_count,
  reblogs_count,
  favourites_count,
});

export const getToots = async (): Promise<IToots | null> => {
  const { MASTODON_ACCESS_TOKEN, MASTODON_ID } = process.env;
  const count = 2;

  if (!MASTODON_ACCESS_TOKEN || !MASTODON_ID) {
    console.log("getToots envars not set");
    return null;
  }

  try {
    const toots = await getTootsById(MASTODON_ACCESS_TOKEN, MASTODON_ID);

    if (!toots || toots.length <= 0) {
      throw Error(`no toots found for ${MASTODON_ID}`);
    }
    return {
      data: toots.slice(0, count).map(mapTootResponseToToot),
      author: {
        username: toots[0].account.username,
        url: toots[0].account.url,
      },
    };
  } catch (err) {
    console.log("error: " + err);
    return null;
  }
};
