import { FC } from "react";
import styles from "./MeetupCard.module.scss";

const MeetupList: FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        marginTop: "20px",
      }}
    >
      <section className={styles["meetup-card"]}>upcoming meeting</section>
      <section className={styles["meetup-card"]}>
        <ul>
          <li>past meetup 1</li>
          <li>past meetup 2</li>
        </ul>
      </section>
    </div>
  );
};

export default MeetupList;
