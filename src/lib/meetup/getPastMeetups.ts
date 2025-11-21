import {
  eventsDocument,
  GQL_ENDPOINT,
  GROUP_URL_NAME,
  mapResponseToMeetupEvents,
} from "./meetup-graphql";
import { IMeetupEvent, MeetupResponse } from "./meetup.types";
import { request } from "graphql-request";

const pastEventsVariables = {
  urlname: GROUP_URL_NAME,
  status: "PAST",
  sortOrder: "DESC",
};

export const getPastMeetups = async (): Promise<Array<IMeetupEvent> | null> => {
  try {
    const pastMeetupsResponse = await request<MeetupResponse>(
      GQL_ENDPOINT,
      eventsDocument,
      pastEventsVariables
    );

    const meetupEvents = mapResponseToMeetupEvents(pastMeetupsResponse);

    return meetupEvents.slice(0, 7);
  } catch (err) {
    console.log("getPastMeetups failed:", err);
    return null;
  }
};
