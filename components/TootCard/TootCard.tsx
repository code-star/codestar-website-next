import Image from "next/image";
import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IToots } from "../../lib/mastodon/getToots";
import mastodonSvg from "../../public/mastodon_logo.svg";
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
      {data.map(({ id, text, created_at }) => (
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
          <p>{text}</p>
        </div>
      ))}
    </section>
  );
};

export default TootCard;
