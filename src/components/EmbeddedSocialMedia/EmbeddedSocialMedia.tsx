import { FC } from "react";
import { IToots } from "../../lib/mastodon/getToots";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import Playlist from "../Playlist/Playlist";
import TootCard from "../TootCard/TootCard";
import styles from "./EmbeddedSocialMedia.module.scss";

interface EmbeddedSocialMediaProps {
  toots: IToots | null;
  playlist: IPlaylistItem[];
}

const EmbeddedSocialMedia: FC<EmbeddedSocialMediaProps> = ({
  toots,
  playlist,
}) => {
  return (
    <div className={styles["embedded-social-media"]}>
      <TootCard toots={toots} />
      <Playlist playlist={playlist} viewport="sm" />
    </div>
  );
};

export default EmbeddedSocialMedia;
