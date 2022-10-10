import Image from "next/image";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { ITweets } from "../../lib/twitter/getTweets";
import twitterSvg from "../../public/twitter_logo.svg";
import styles from "./TweetCard.module.scss";

interface ITweetCardProps {
  tweets: ITweets | null;
}

const TweetCard: FC<ITweetCardProps> = ({ tweets }) => {
  if (!tweets) {
    return <></>;
  }
  const { author, data } = tweets;
  return (
    <section className={styles["tweet-card"]}>
      <a href={`https://twitter.com/${author.username}`}>@{author.username}</a>
      {data.map(({ id, text, created_at }) => (
        <div key={id}>
          <p>
            <Image
              src={twitterSvg}
              alt="Codestar Twitter"
              width={24}
              height={24}
            />
            <span>{formatDate(created_at)}</span>
          </p>
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
};

export default TweetCard;
