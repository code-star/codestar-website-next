import Link from "next/link";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { ITweets } from "../../lib/twitter/getTweets";
import { IPlaylistItem } from "../../lib/youtube-playlist/youtube-playlist.types";
import PlaylistItemCard from "../PlaylistItemCard/PlaylistItemCard";
import styles from "./EmbeddedSocialMedia.module.scss";
import Image from "next/image";
import twitterSvg from "../../public/twitter_logo.svg";
interface EmbeddedSocialMediaProps {
  tweets: ITweets | null;
  playlist: IPlaylistItem[];
}

const TweetCard = ({ tweets }: { tweets?: ITweets | null }) => {
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
    <section style={{ width: 330 }}>
      {/* <p>{tweets.author.username}</p>{" "} */}
      {tweets.data.map((d) => (
        <div key={d.id}>
          {/* TODO icon <p>[icon] {formatDate(d["created_at"])}</p> */}
          <p>
            <Image
              src={twitterSvg}
              alt="Codestar Twitter"
              width={24}
              height={24}
            />{" "}
            {formatDate(d["created_at"])}
          </p>
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
