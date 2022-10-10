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
  return (
    <section className={styles["tweet-card"]}>
      {/* <p>{tweets.author.username}</p>{" "} */}
      {tweets.data.map((d) => (
        <div key={d.id}>
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

export default TweetCard;
