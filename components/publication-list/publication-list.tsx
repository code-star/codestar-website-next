import { FC } from "react";
import { IPublication } from "../../lib/publications/getPublications";

interface IPublicationListProps {
  publications: IPublication[];
}

const PublicationList: FC<IPublicationListProps> = ({ publications }) => {
  return (
    <div>
      <h1>Publications</h1>
      {/* {JSON.stringify(publications)} */}
      {publications.map((p) => (
        <section key={p.id}>
          <h2>{p.title}</h2>
          <p>
            {p.author} {p.uniqueSlug}
          </p>
        </section>
      ))}
    </div>
  );
};

export default PublicationList;
