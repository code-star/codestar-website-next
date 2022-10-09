import { FC } from "react";
import { formatDate } from "../../lib/formatDate";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import MeetupCard from "../MeetupCard/MeetupCard";
import MeetupListItem from "../MeetupListItem.tsx/MeetupListItem";
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
      {upcomingMeetups.map((p) => {
        return (
          <a key={p.name} href={p.link}>
            <MeetupCard>
              <h3>{p.name}</h3>
              <p>{formatDate(p.time)}</p>
              <a href={p.link}>SIGN UP!</a>
            </MeetupCard>
          </a>
        );
      })}

      <h2>PAST MEETUPS</h2>
      <MeetupCard>
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
      {/* <section className={styles["meetup-card"]}>upcoming meetup!</section>
      <section className={styles["meetup-card"]}>
        past meetups
        <ul>
          {pastMeetups.map((p) => {
            return (
              <li key={p.name}>
                <a href={p.link}>
                  <h3>{p.name}</h3>
                  <p>
                    {new Date(p.time).toLocaleDateString("nl-NL", {
                      year: "numeric",
                      month: "2-digit",
                      day: "2-digit",
                    })}
                  </p>
                </a>
              </li>
            );
          })}
        </ul>
      </section> */}
    </div>
  );
};

export default MeetupCardList;
