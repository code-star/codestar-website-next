import Link from "next/link";
import { FC } from "react";
import styles from "./TopBar.module.scss";
import Image from "next/image";
import codestarLogo from "../../public/codestar_logo_cream-red.svg";

const TopBar: FC = () => {
  return (
    <nav className={styles["top-bar"]}>
      <div>
        <Image src={codestarLogo} alt="Codestar Logo" width={150} height={40} />
        <ul>
          {/* <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/events">Events</Link>
        </li>
        <li>Codelancer</li> */}
          <li>
            <a href="https://www.ordina.nl/vakgebieden/scala/">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
