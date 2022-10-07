import { FC } from "react";
import { IPublication } from "../../lib/publications/getPublications";
// import SanitizedHTML from 'react-sanitized-html';
import styles from "./PublicationCard.module.scss";

interface IPublicationCardProps {
  publication: IPublication;
}

const PublicationCard: FC<IPublicationCardProps> = ({ publication }) => {
  const { title, author, uniqueSlug, paragraphs, latestPublishedAt } = publication;
  return (
    <a href={uniqueSlug} className={styles["publication-card"]}>
      <section>
        <div>A</div>
        <div>
          <p className={styles["publication-card--author"]}>
            {author}
          </p>
          <p className={styles["publication-card--date"]}>
            {latestPublishedAt}
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
