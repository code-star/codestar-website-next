import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EmbeddedSocialMedia from "../components/EmbeddedSocialMedia/EmbeddedSocialMedia";
import MeetupCardList from "../components/MeetupCardList/MeetupCardList";
import PublicationList from "../components/PublicationList/PublicationList";
import TopBar from "../components/TopBar/TopBar";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import { getPastMeetups } from "../lib/meetup/getPastMeetups";
import { getUpcomingMeetups } from "../lib/meetup/getUpcomingMeetups";
import { IMeetupEvent } from "../lib/meetup/meetup.types";
import { getPublications } from "../lib/publications/getPublications";
import { IPublication } from "../lib/publications/publications.types";
import { getYoutubePlaylist } from "../lib/youtube-playlist/getYoutubePlaylist";
import { IPlaylistItem } from "../lib/youtube-playlist/youtube-playlist.types";
import styles from "../styles/Home.module.scss";

interface IHomeProps {
  publications?: IPublication[] | null;
  upcomingMeetups?: IMeetupEvent[] | null;
  pastMeetups?: IMeetupEvent[] | null;
  playlist?: IPlaylistItem[];
}

export async function getStaticProps() {
  const publications = await getPublications();
  const upcomingMeetups = await getUpcomingMeetups();
  const pastMeetups = await getPastMeetups();
  const playlist = await getYoutubePlaylist();
  return {
    props: {
      publications,
      upcomingMeetups,
      pastMeetups,
      playlist,
    },
  };
  // return publications ? { props: { publications } } : { notFound: true };
}

const Home: NextPage<IHomeProps> = ({
  publications,
  upcomingMeetups,
  pastMeetups,
  playlist,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Codestar</title>
        <meta name="description" content="Codestar blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <div className={styles.content}>
        <aside>
          <EmbeddedSocialMedia playlist={playlist ?? []} />
        </aside>
        <main className={styles.main}>
          <WelcomeCard />
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

        <aside>
          {pastMeetups || upcomingMeetups ? (
            <MeetupCardList
              upcomingMeetups={upcomingMeetups || []}
              pastMeetups={pastMeetups || []}
            />
          ) : (
            ""
          )}
        </aside>
      </div>

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
