import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
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
        <p>{formatDate(time)}</p>
      </a>
    </li>
  );
};

export default MeetupListItem;
