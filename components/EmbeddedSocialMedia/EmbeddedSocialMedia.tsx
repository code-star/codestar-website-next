import Link from "next/link";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { ITweets } from "../../lib/twitter/getTweets";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./EmbeddedSocialMedia.module.scss";

interface EmbeddedSocialMediaProps {
  tweets?: ITweets;
  playlist: IPlaylistItem[];
}

const TweetCard = ({ tweets }: { tweets?: ITweets }) => {
  if (!tweets) {
    return <></>;
  }
  /*
  avatar_img | Codestar

  tweet_icon date
  text 

  tweet_icon date
  text 
  */
  return (
    <section style={{ width: "15vw" }}>
      <p>{tweets.author.username}</p>{" "}
      {tweets.data.map((d) => (
        <div key={d.id}>
          <p>[icon] {formatDate(d["created_at"])}</p>
          <p>{d.text}</p>
        </div>
      ))}{" "}
    </section>
  );
};

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
