import { IMeetupEvent, MeetupResponse } from "./meetup.types";

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
// const GET_UPCOMING_EVENTS_URL =
//   "https://api.meetup.com/Codestar-Night/events?&sign=true&photo-host=public&page=3&fields=featured_photo&desc=false";
const GET_UPCOMING_EVENTS_URL =
  "https://api.meetup.com/Codestar-Night/events?&sign=true&photo-host=public&page=20&desc=true&status=past&fields=featured_photo";

export const getUpcomingMeetups =
  async (): Promise<Array<IMeetupEvent> | null> => {
    try {
      const response = await fetch(GET_UPCOMING_EVENTS_URL);
      if (response.ok) {
        const meetupResponse: MeetupResponse = await response.json();
        // TODO remove slice
        return meetupResponse.slice(0, 2);
      } else {
        console.log("not ok");
        return null;
      }
    } catch (err) {
      console.log(err);
      return null;
    }
  };
