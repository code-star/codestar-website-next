import { NextPage } from "next";
import { getPastMeetups } from "../lib/meetup/getPastMeetups";
import { MeetupResponse } from "../lib/meetup/meetup.types";

export async function getStaticProps() {
  const pastMeetups = await getPastMeetups();
  return pastMeetups ? { props: { pastMeetups } } : { notFound: true };
}

interface IEventProps {
  pastMeetups: MeetupResponse;
}

const Events: NextPage<IEventProps> = ({ pastMeetups }) => {
  return (
    <div>
      <h1>Events</h1>
      {pastMeetups.map((m) => (
        <section key={m.name}>
          <h2>{m.name}</h2>
          <p>{m.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Events;
