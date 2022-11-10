import { FC } from "react";
import { IToots } from "../../lib/mastodon/getToots";
import { ITweets } from "../../lib/twitter/getTweets";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import Playlist from "../Playlist/Playlist";
import TootCard from "../TootCard/TootCard";
import styles from "./EmbeddedSocialMedia.module.scss";

interface EmbeddedSocialMediaProps {
  toots: IToots | null;
  tweets: ITweets | null;
  playlist: IPlaylistItem[];
}

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({
  toots,
  playlist,
}) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <TootCard toots={toots} />
      {/* <TweetCard tweets={tweets} /> */}
      <Playlist playlist={playlist} viewport="sm" />
    </div>
  );
};

export default EmbeddedSocialMedia;
