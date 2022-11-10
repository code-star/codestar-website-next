import Image from "next/image";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IToots } from "../../lib/mastodon/getToots";
import mastodonSvg from "../../public/mastodon_logo.svg";
import replySvg from "../../public/fa-reply.svg";
import retweetSvg from "../../public/fa-retweet.svg";
import starSvg from "../../public/fa-star.svg";
import styles from "./TootCard.module.scss";

interface ITootCardProps {
  toots: IToots | null;
}

const TootCard: FC<ITootCardProps> = ({ toots }) => {
  if (!toots) {
    return <></>;
  }
  const { author, data } = toots;
  return (
    <section className={styles["toot-card"]}>
      <a href={author.url}>@{author.username}@mastodon.social</a>
      {data.map(
        ({
          id,
          text,
          created_at,
          url,
          reblogs_count,
          replies_count,
          favourites_count,
        }) => (
          <div key={id}>
            <p>
              <Image
                src={mastodonSvg}
                alt="Codestar Mastodon"
                width={24}
                height={24}
              />
              <span>{formatDate(created_at)}</span>
            </p>
            <a href={url}>{text}</a>
            <div className={styles["toot-card--badges"]}>
              <span title="Replies">
                <Image src={replySvg} alt="Replies" width={18} height={18} />
                {replies_count}
              </span>
              <span title="Reblogs">
                <Image src={retweetSvg} alt="Reblogs" width={18} height={18} />
                {reblogs_count}
              </span>
              <span title="Favourites">
                <Image src={starSvg} alt="Favourites" width={18} height={18} />
                {favourites_count}
              </span>
            </div>
          </div>
        )
      )}
    </section>
  );
};

export default TootCard;
