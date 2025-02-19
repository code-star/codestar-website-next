import Image from "next/image";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IToots } from "../../lib/mastodon/getToots";
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
                src="/mastodon_logo.svg"
                alt="Codestar Mastodon"
                width={24}
                height={24}
              />
              <span>{formatDate(created_at)}</span>
            </p>
            <a href={url}>{text}</a>
            <div className={styles["toot-card--badges"]}>
              <span title="Replies">
                <Image
                  src="/fa-reply.svg"
                  alt="Replies"
                  width={18}
                  height={18}
                />
                {replies_count}
              </span>
              <span title="Reblogs">
                <Image
                  src="/fa-retweet.svg"
                  alt="Reblogs"
                  width={18}
                  height={18}
                />
                {reblogs_count}
              </span>
              <span title="Favourites">
                <Image
                  src="fa-star.svg"
                  alt="Favourites"
                  width={18}
                  height={18}
                />
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
