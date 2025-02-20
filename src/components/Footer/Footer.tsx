import { FC } from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <ul className="contact-info">
          <li>
            <a href="mailto:codestar@ordina.nl">codestar.nl@soprasteria.com</a>
          </li>
          <li>
            <a href="tel:+31306637000">+31 30 6637000</a>
          </li>
          <li>
            <a
              href="https://maps.google.com/maps?ll=52.057652,5.111462&z=16&t=m&hl=en-GB&gl=NL&mapclient=embed&cid=15918536717636328792"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ringwade 1, 3439 LM Nieuwegein
            </a>
          </li>
        </ul>

        <p className="social-links">
          <a
            href="https://mastodon.social/@codestar"
            aria-label="Mastodon"
            rel="me"
          >
            <Image
              src="/mastodon_logo.svg"
              alt="Codestar Mastodon"
              width={32}
              height={32}
            />
          </a>
          {/* <a href="https://twitter.com/codestar_nl" aria-label="Twitter">
            <Image
              src="/twitter_logo.svg"
              alt="Codestar Twitter"
              width={32}
              height={32}
            />
          </a> */}
          <a href="https://github.com/code-star" aria-label="Github">
            <Image
              src="/github_logo.svg"
              alt="Codestar Github"
              width={32}
              height={32}
            />
          </a>
          <a href="https://medium.com/codestar-blog" aria-label="Medium">
            <Image
              src="/medium_logo.svg"
              alt="Codestar Medium"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codestar-powered-by-sopra-steria/"
            aria-label="Linkedin"
          >
            <Image
              src="/linkedin_logo.svg"
              alt="Codestar LinkedIn"
              width={32}
              height={32}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCqwHhJNEUe7D-HGsX4zvKzQ"
            aria-label="Youtube"
          >
            <Image
              src="/youtube_logo.svg"
              alt="Codestar Youtube"
              width={36}
              height={32}
            />
          </a>
          <a
            href="https://www.meetup.com/Code-Star-Night"
            aria-label="Meetup.com"
          >
            <Image
              src="/meetup_logo.svg"
              alt="Codestar Meetup"
              width={32}
              height={32}
            />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
