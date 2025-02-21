import { FC } from "react";
import styles from "./TopBar.module.scss";
import Image from "next/image";
import Link from "next/link";

const TopBar: FC = () => {
  return (
    <nav className={styles["top-bar"]}>
      <div>
        <Link href="/">
          <Image
            src="/codestar_logo_cream-red.svg"
            alt="Codestar Logo"
            width={150}
            height={40}
          />
        </Link>

        <ul>
          {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>Codelancer</li> */}
          <li>
            <a href="https://www.linkedin.com/company/codestar-powered-by-sopra-steria/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
