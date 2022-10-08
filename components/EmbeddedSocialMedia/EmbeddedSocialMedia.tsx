import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import styles from "./PlaylistItemCard.module.scss";

interface EmbeddedSocialMediaProps {
  playlist: IPlaylistItem[];
}

const PlaylistItemCard: FC<{ item: IPlaylistItem }> = ({ item }) => {
  const { thumbnails, title, publishedAt, description } = item;
  return (
    <section className={styles["playlistitem-card"]}>
      <Image alt="" width="330px" height="200px" src={thumbnails.default.url} />
      <h3>{title}</h3>
      <p>{formatDate(publishedAt)}</p>
    </section>
  );
};

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({ playlist }) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <section>tweets</section>
      <h2>
        <Link href="https://youtube.com/c/codestar">All Youtube</Link>
      </h2>
      {playlist.map((item) => {
        return <PlaylistItemCard key={item.id} item={item} />;
      })}
    </div>
  );
};

export default EmbeddedSocialMedia;
