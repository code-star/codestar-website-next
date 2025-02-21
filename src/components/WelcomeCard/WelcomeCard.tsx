import styles from "./WelcomeCard.module.scss";

const WelcomeCard = () => {
  return (
    <section className={styles["welcome-card"]}>
      Codestar makes highly available, scalable solutions with functional
      reactive programming in the back-end and frontend. Our colleagues are
      published in magazines and on blogs. Also see the{" "}
      <a href="https://youtube.com/c/codestar">Codestar YouTube</a> channel for
      our talks at conferences.
    </section>
  );
};

export default WelcomeCard;
