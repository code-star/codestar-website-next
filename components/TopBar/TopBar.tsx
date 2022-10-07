import Link from "next/link";
import { FC } from "react";
import styles from "./TopBar.module.scss";

const TopBar: FC = () => {
  return (
    <nav className={styles["top-bar"]}>
      <h1>Codestar</h1>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>Codelancer</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default TopBar;
