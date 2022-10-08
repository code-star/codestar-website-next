import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";

interface IMeetupListItemProps {
  meetup: IMeetupEvent;
}

const MeetupListItem: FC<IMeetupListItemProps> = ({ meetup }) => {
  const { name, link, time } = meetup;
  return (
    <li>
      <a href={link}>
        <h3>{name}</h3>
        <p>
          {new Date(time).toLocaleDateString("nl-NL", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}
        </p>
      </a>
    </li>
  );
};

export default MeetupListItem;
