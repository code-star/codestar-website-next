import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import styles from "./PlaylistItemCard.module.scss";

const PlaylistItemCard: FC<{ item: IPlaylistItem }> = ({ item }) => {
  const { thumbnails, title, publishedAt, id } = item;

  return (
    <a href={`https://youtube.com/watch?v=${id}`}>
      <section className={styles["playlistitem-card"]}>
        <div
          className="img"
          style={{
            backgroundImage: `url(${thumbnails?.medium?.url})`,
          }}
        ></div>
        <h3>{title}</h3>
        <p>{formatDate(publishedAt)}</p>
      </section>
    </a>
  );
};

export default PlaylistItemCard;
