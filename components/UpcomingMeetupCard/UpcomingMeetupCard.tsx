import { FC } from "react";
import { IMeetupEvent } from "../../lib/meetup/meetup.types";
import Image from "next/image";
import { formatDate } from "../../lib/formatDate";
import styles from "./UpcomingMeetupCard.module.scss";

interface IUpcomingMeetupCardProps {
  meetup: IMeetupEvent;
}

const UpcomingMeetupCard: FC<IUpcomingMeetupCardProps> = ({ meetup }) => {
  const { link, featured_photo, name, time } = meetup;
  return (
    <a href={link}>
      <section className={styles["upcoming-meetup-card"]}>
        {featured_photo && (
          <Image
            alt=""
            src={featured_photo.photo_link}
            width={350}
            height={200}
          />
        )}
        <h3>{name}</h3>
        <p>{formatDate(time)}</p>
        <a href={link}>SIGN UP!</a>
      </section>
    </a>
  );
};

export default UpcomingMeetupCard;
