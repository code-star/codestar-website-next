import { FC } from "react";
import styles from "./MeetupCard.module.scss";

interface MeetupCardProps {
  children?: React.ReactNode;
}

const MeetupCard: FC<MeetupCardProps> = ({ children }) => {
  return <section className={styles["meetup-card"]}>{children}</section>;
};

export default MeetupCard;
