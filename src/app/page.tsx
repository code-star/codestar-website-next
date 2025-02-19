import styles from "./page.module.scss";
import { getToots } from "@/lib/mastodon/getToots";
import EmbeddedSocialMedia from "@/components/EmbeddedSocialMedia/EmbeddedSocialMedia";
import Head from "next/head";
import TopBar from "@/components/TopBar/TopBar";
import Footer from "@/components/Footer/Footer";
import WelcomeCard from "@/components/WelcomeCard/WelcomeCard";
import Playlist from "@/components/Playlist/Playlist";
import { getYoutubePlaylist } from "@/lib/youtube-playlist/getYoutubePlaylist";
import { getUpcomingMeetups } from "@/lib/meetup/getUpcomingMeetups";
import { getPublications } from "@/lib/publications/getPublications";
import PublicationList from "@/components/PublicationList/PublicationList";
import UpcomingMeetupList from "@/components/UpcomingMeetupList/UpcomingMeetupList";
import { getPastMeetups } from "@/lib/meetup/getPastMeetups";
import MeetupCardList from "@/components/MeetupCardList/MeetupCardList";

export default async function Home() {
  const publications = await getPublications();
  const pastMeetups = await getPastMeetups();
  const upcomingMeetups = await getUpcomingMeetups();
  const toots = await getToots();
  const playlist = await getYoutubePlaylist();

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
          <EmbeddedSocialMedia toots={toots} playlist={playlist ?? []} />
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
          <Playlist playlist={playlist || []} viewport="xs" />
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
}
