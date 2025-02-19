import Link from "next/link";
import { FC } from "react";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./Playlist.module.scss";

interface PlaylistProps {
  playlist: IPlaylistItem[];
  viewport: "xs" | "sm";
}

const Playlist: FC<PlaylistProps> = ({ playlist, viewport }) => {
  const className = `${styles["playlist"]} viewport-${viewport}`;
  const count = viewport === "xs" ? 1 : playlist.length;
  return (
    <div className={className}>
      {playlist.slice(0, count).map((item) => {
        return <PlaylistItemCard key={item.id} item={item} />;
      })}
      <p>
        <Link href="https://youtube.com/c/codestar">More on YouTube...</Link>
      </p>
    </div>
  );
};

export default Playlist;
