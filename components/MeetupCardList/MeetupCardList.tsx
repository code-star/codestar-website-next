import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import MeetupCard from "../MeetupCard/MeetupCard";
import MeetupListItem from "../MeetupListItem.tsx/MeetupListItem";
import UpcomingMeetupList from "../UpcomingMeetupList/UpcomingMeetupList";
import styles from "./MeetupCardList.module.scss";

interface IMeetupCardListProps {
  upcomingMeetups: IMeetupEvent[];
  pastMeetups: IMeetupEvent[];
}

const MeetupCardList: FC<IMeetupCardListProps> = ({
  upcomingMeetups,
  pastMeetups,
}) => {
  return (
    <div className={styles["meetup-list"]}>
      <UpcomingMeetupList upcomingMeetups={upcomingMeetups} viewport="sm" />

      <MeetupCard>
        <h2>PAST MEETUPS</h2>
        <ul>
          {pastMeetups.map((p) => {
            return <MeetupListItem key={p.name} meetup={p} />;
          })}
          <li>
            <a href="https://www.meetup.com/codestar-night/events/past/">
              More past meetups...
            </a>
          </li>
        </ul>
      </MeetupCard>
    </div>
  );
};

export default MeetupCardList;
