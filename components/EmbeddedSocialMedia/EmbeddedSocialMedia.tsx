import Link from "next/link";
import { FC } from "react";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./EmbeddedSocialMedia.module.scss";

interface EmbeddedSocialMediaProps {
  playlist: IPlaylistItem[];
}

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({ playlist }) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <section>
        <h1>TWEETS</h1>
        <p>todo</p>
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
