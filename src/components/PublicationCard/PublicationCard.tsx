import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IPublication } from "../../lib/publications/publications.types";
// import SanitizedHTML from 'react-sanitized-html';
import styles from "./PublicationCard.module.scss";
import { PublicationCardAvatar } from "./PublicationCardAvatar";

interface IPublicationCardProps {
  publication: IPublication;
}

const PublicationCard: FC<IPublicationCardProps> = ({ publication }) => {
  const { title, author, uniqueSlug, latestPublishedAt } = publication;

  return (
    <a href={uniqueSlug} className={styles["publication-card"]}>
      <section>
        <PublicationCardAvatar author={author} />
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
