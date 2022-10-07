import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import styles from "./MeetupCard.module.scss";

interface IMeetupListProps {
  pastMeetups: IMeetupEvent[];
}

const MeetupList: FC<IMeetupListProps> = ({ pastMeetups }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
        marginBottom: "20px",
      }}
    >
      <section className={styles["meetup-card"]}>upcoming meetup!</section>
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
      </section>
    </div>
  );
};

export default MeetupList;
