import { FC } from "react";
import { IPublication } from "../../lib/publications/publications.types";
import PublicationCard from "../PublicationCard/PublicationCard";

interface IPublicationListProps {
  publications: IPublication[];
}

const PublicationList: FC<IPublicationListProps> = ({ publications }) => {
  return (
    <>
      {publications.map((p) => (
        <PublicationCard key={p.id} publication={p} />
      ))}
    </>
  );
};

export default PublicationList;
