import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import EmbeddedSocialMedia from "../components/EmbeddedSocialMedia/EmbeddedSocialMedia";
import Footer from "../components/Footer/Footer";
import MeetupCardList from "../components/MeetupCardList/MeetupCardList";
import PublicationList from "../components/PublicationList/PublicationList";
import TopBar from "../components/TopBar/TopBar";
import UpcomingMeetupList from "../components/UpcomingMeetupList/UpcomingMeetupList";
import WelcomeCard from "../components/WelcomeCard/WelcomeCard";
import { getPastMeetups } from "../lib/meetup/getPastMeetups";
import { getUpcomingMeetups } from "../lib/meetup/getUpcomingMeetups";
import { IMeetupEvent } from "../lib/meetup/meetup.types";
import { getPublications } from "../lib/publications/getPublications";
import { IPublication } from "../lib/publications/publications.types";
import { getTweets, ITweets } from "../lib/twitter/getTweets";
import { getYoutubePlaylist } from "../lib/youtube-playlist/getYoutubePlaylist";
import { IPlaylistItem } from "../lib/youtube-playlist/youtube-playlist.types";
import styles from "../styles/Home.module.scss";

interface IHomeStaticProps {
  publications?: IPublication[] | null;
  upcomingMeetups?: IMeetupEvent[] | null;
  pastMeetups?: IMeetupEvent[] | null;
  tweets: ITweets | null;
  playlist: IPlaylistItem[] | undefined;
}

type IHomeProps = IHomeStaticProps;

export async function getStaticProps(): Promise<{ props: IHomeStaticProps }> {
  const publications = await getPublications();
  const upcomingMeetups = await getUpcomingMeetups();
  const pastMeetups = await getPastMeetups();
  const tweets = await getTweets();
  const playlist = await getYoutubePlaylist();
  return {
    props: {
      publications,
      upcomingMeetups,
      pastMeetups,
      tweets,
      playlist,
    },
  };
}

const Home: NextPage<IHomeProps> = ({
  publications,
  upcomingMeetups,
  pastMeetups,
  tweets,
  playlist,
}) => {
  return (
    <>
      <Head>
        <title>Codestar</title>
        <meta name="description" content="Codestar blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />

      <div className={styles.content}>
        <aside>
          <EmbeddedSocialMedia tweets={tweets} playlist={playlist ?? []} />
        </aside>

        <main className={styles.main}>
          <WelcomeCard />
          <UpcomingMeetupList
            upcomingMeetups={upcomingMeetups || []}
            viewport="xs"
          />
          {publications ? (
            <PublicationList publications={publications} />
          ) : (
            "Failed"
          )}
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

      <Footer />
    </>
  );
};

export default Home;
