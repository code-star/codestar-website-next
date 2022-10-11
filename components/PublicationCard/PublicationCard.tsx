import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IPublication } from "../../lib/publications/publications.types";
// import SanitizedHTML from 'react-sanitized-html';
import styles from "./PublicationCard.module.scss";

interface IPublicationCardProps {
  publication: IPublication;
}

const avatars: Record<string, string> = {
  mdworld: "https://miro.medium.com/fit/c/176/176/0*gTl35Xy5zRcgu5wJ.png",
  "nathan perdijk":
    "https://miro.medium.com/fit/c/88/88/0*Bqr-dMZplB-namyY.jpg",
  "bjorn ‘bjeaurn’":
    "https://miro.medium.com/fit/c/176/176/0*o9UzuQyUwobacrCt.jpeg",
  "hamza haiken":
    "https://miro.medium.com/fit/c/176/176/2*1JTGoMi8_nuGQVO1EoItXg.png",
  "nick ten veen":
    "https://miro.medium.com/fit/c/88/88/2*k7vMxGfKwfqJ86TcprDA_Q.jpeg",
};

const PublicationCard: FC<IPublicationCardProps> = ({ publication }) => {
  const { title, author, uniqueSlug, latestPublishedAt } = publication;
  const avatar = avatars[author.toLowerCase()];
  return (
    <a href={uniqueSlug} className={styles["publication-card"]}>
      <section>
        <div
          className={styles["publication-card--avatar"]}
          style={
            avatar
              ? {
                  backgroundImage: `url(${avatar})`,
                }
              : {}
          }
        >
          {avatar ? "" : author.slice(0, 1).toUpperCase()}
        </div>
        <div>
          <p className={styles["publication-card--author"]}>{author}</p>
          <p className={styles["publication-card--date"]}>
            {formatDate(latestPublishedAt)}
          </p>
          <h2>{title}</h2>
          {/* <SanitizedHTML
            allowedTags={['h3', 'em', 'p', 'a']}
            html={paragraphs}
          /> */}
        </div>
      </section>
    </a>
  );
};

export default PublicationCard;
