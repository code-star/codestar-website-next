import { FC } from "react";
import { IPublication } from "../../lib/publications/getPublications";
// import SanitizedHTML from 'react-sanitized-html';

interface IPublicationListProps {
  publications: IPublication[];
}

const PublicationList: FC<IPublicationListProps> = ({ publications }) => {
  return (
    <div>
      {/* <h1>Publications</h1> */}
      {/* TODO make "publication-card" component */}
      {publications.map(({ id, title, author, uniqueSlug, paragraphs }) => (
        <section key={id}>
          <h2>{title}</h2>
          <p>
            by {author} | <a href={uniqueSlug}>read more</a>
          </p>
          {/* <p>{p.paragraphs}</p> */}
          {/* <SanitizedHTML
            allowedTags={['h3', 'em', 'p', 'a']}
            html={paragraphs}
          /> */}
        </section>
      ))}
    </div>
  );
};

export default PublicationList;
