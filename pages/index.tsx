import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import PublicationList from "../components/PublicationList/PublicationList";
import {
  getPublications,
  IPublication,
} from "../lib/publications/getPublications";
import styles from "../styles/Home.module.scss";

interface IHomeProps {
  publications?: IPublication[] | null;
}

export async function getStaticProps() {
  const publications = await getPublications();
  return publications ? { props: { publications } } : { notFound: true };
}

const Home: NextPage<IHomeProps> = ({ publications }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codestar</title>
        <meta name="description" content="Codestar blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={styles.nav}>
        <div>Codestar</div>
        <ul>
          <li>Home</li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>Codelancer</li>
          <li>Contact</li>
        </ul>
      </nav>

      <main className={styles.main}>
        {publications ? (
          <PublicationList publications={publications} />
        ) : (
          "Failed"
        )}

        {/* <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p> */}

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <Link href="/events" className={styles.card}>
            Codestar events
          </Link>
        </div> */}
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
