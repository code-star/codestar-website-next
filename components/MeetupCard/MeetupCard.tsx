import Image from "next/image";
import { FC } from "react";
import styles from "./MeetupCard.module.scss";

interface MeetupCardProps {
  highlight?: boolean;
  image?: string;
  children?: React.ReactNode;
}

const MeetupCard: FC<MeetupCardProps> = ({
  highlight = false,
  image,
  children,
}) => {
  const classNames = `${styles["meetup-card"]} ${
    highlight ? styles["meetup-card__highlight"] : ""
  }`;
  return (
    <section className={classNames}>
      {image && <Image alt="" src={image} width="100%" />}
      {children}
    </section>
  );
};

export default MeetupCard;
