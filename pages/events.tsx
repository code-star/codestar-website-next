// export async function getStaticPaths() {
//   return { paths: [], fallback: true };
// }

import { NextPage } from "next";
import { FC } from "react";
import { MeetupResponse } from "../lib/meetup/meetup.types";

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
const GET_PAST_EVENTS_URL =
  "https://api.meetup.com/Codestar-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past&fields=featured_photo";

export async function getStaticProps({ params }: any) {
  //   const { tweet } = params;

  // Test valid twitter account name
  //   if (tweet.length > 40 || !TWEET_ID.test(tweet)) {
  //     return { notFound: true };
  //   }

  //   try {
  //     const ast = await fetchTweetAst(tweet);
  //     return ast ? { props: { ast } } : { notFound: true };
  //   } catch (error) {
  //     // The Twitter API most likely died
  //     console.error(error);
  //     return { notFound: true };
  //   }
  try {
    // TODO move to /lib/fetchFoo.ts
    const response = await fetch(GET_PAST_EVENTS_URL);
    if (response.ok) {
      const meetupResponse: MeetupResponse = await response.json();
      return { props: { meetupResponse } };
    } else {
      console.log("not ok");
      return { notFound: true };
    }
  } catch (err) {
    console.log(err);
    return { notFound: true };
  }
}

interface IEventProps {
  meetupResponse: MeetupResponse;
}

const Events: NextPage<IEventProps> = ({ meetupResponse }) => {
  return (
    <div>
      <h1>Events</h1>
      {meetupResponse.map((m) => (
        <section key={m.name}>
          <h2>{m.name}</h2>
          <p>{m.description}</p>
        </section>
      ))}
    </div>
  );
};

export default Events;
