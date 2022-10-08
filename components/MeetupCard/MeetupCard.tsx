import Image from "next/image";
import { FC } from "react";
import styles from "./MeetupCard.module.scss";

interface MeetupCardProps {
  image?: string;
  children?: React.ReactNode;
}

const MeetupCard: FC<MeetupCardProps> = ({ image, children }) => {
  return (
    <section className={styles["meetup-card"]}>
      {image && <Image alt="" src={image} width="100%" />}
      {children}
    </section>
  );
};

export default MeetupCard;
