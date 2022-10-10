import Link from "next/link";
import { FC } from "react";
import { ITweets } from "../../lib/twitter/getTweets";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./EmbeddedSocialMedia.module.scss";
import TweetCard from "../TweetCard/TweetCard";

interface EmbeddedSocialMediaProps {
  tweets: ITweets | null;
  playlist: IPlaylistItem[];
}

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({
  tweets,
  playlist,
}) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <TweetCard tweets={tweets} />
      {playlist.map((item) => {
        return <PlaylistItemCard key={item.id} item={item} />;
      })}
      <p>
        <Link href="https://youtube.com/c/codestar">More ...</Link>
      </p>
    </div>
  );
};

export default EmbeddedSocialMedia;
