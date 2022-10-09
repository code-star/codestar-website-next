import Link from "next/link";
import { FC } from "react";
import { ITweets } from "../../lib/twitter/getTweets";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./EmbeddedSocialMedia.module.scss";

interface EmbeddedSocialMediaProps {
  tweets?: ITweets;
  playlist: IPlaylistItem[];
}

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({
  tweets,
  playlist,
}) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <section>
        <h1>TWEETS</h1>
        <p>{tweets && tweets.author.username}</p>
        <p>{process.env.NEXT_PUBLIC_FOO}x</p>
      </section>
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
