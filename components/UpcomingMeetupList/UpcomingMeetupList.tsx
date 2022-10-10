import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import UpcomingMeetupCard from "../UpcomingMeetupCard/UpcomingMeetupCard";
import styles from "./UpcomingMeetupList.module.scss";

interface IUpcomingMeetupListProps {
  upcomingMeetups: IMeetupEvent[];
  viewport: "xs" | "sm";
}

const UpcomingMeetupList: FC<IUpcomingMeetupListProps> = ({
  upcomingMeetups,
  viewport,
}) => {
  const className = `${styles["upcoming-meetup-list"]} viewport-${viewport}`;
  return (
    <div className={className}>
      {upcomingMeetups.map((m) => (
        <UpcomingMeetupCard key={m.name} meetup={m} />
      ))}
    </div>
  );
};

export default UpcomingMeetupList;
