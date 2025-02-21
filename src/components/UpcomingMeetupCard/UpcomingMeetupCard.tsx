import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import Image from "next/image";

import styles from "./UpcomingMeetupCard.module.scss";

interface IUpcomingMeetupCardProps {
  meetup: IMeetupEvent;
}

const formatDate = (time: string) =>
  new Date(time).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

const UpcomingMeetupCard: FC<IUpcomingMeetupCardProps> = ({ meetup }) => {
  const { link, featured_photo, name, time } = meetup;
  return (
    <a href={link} className={styles["upcoming-meetup-card"]}>
      <section>
        <h2>MEETUP</h2>
        <h3>{name}</h3>
        {featured_photo && (
          <Image
            alt=""
            src={featured_photo.photo_link}
            width={350}
            height={200}
          />
        )}
        <p>
          <button>SIGN UP FOR {formatDate(time).toUpperCase()}</button>
        </p>
      </section>
    </a>
  );
};

export default UpcomingMeetupCard;
