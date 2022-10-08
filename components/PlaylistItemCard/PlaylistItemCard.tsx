import Image from "next/image";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import styles from "./PlaylistItemCard.module.scss";

const PlaylistItemCard: FC<{ item: IPlaylistItem }> = ({ item }) => {
  const { thumbnails, title, publishedAt } = item;
  return (
    <section className={styles["playlistitem-card"]}>
      <div
        className="img"
        style={{
          backgroundImage: `url(${thumbnails.default.url})`,
        }}
      ></div>
      {/* <Image
        alt={`Frame from the video "${title}"`}
        width="250px"
        height="120px"
        src={thumbnails.default.url}
      /> */}
      <h3>{title}</h3>
      <p>{formatDate(publishedAt)}</p>
    </section>
  );
};

export default PlaylistItemCard;
