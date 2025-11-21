import request from "graphql-request";
import {
  eventsDocument,
  GQL_ENDPOINT,
  GROUP_URL_NAME,
  mapResponseToMeetupEvents,
} from "./meetup-graphql";
import { IMeetupEvent, MeetupResponse } from "./meetup.types";

const upcomingEventsVariables = {
  urlname: GROUP_URL_NAME,
  status: "ACTIVE",
  sortOrder: "ASC",
};

export const getUpcomingMeetups =
  async (): Promise<Array<IMeetupEvent> | null> => {
    try {
      const upcomingMeetupsResponse = await request<MeetupResponse>(
        GQL_ENDPOINT,
        eventsDocument,
        upcomingEventsVariables
      );

      return mapResponseToMeetupEvents(upcomingMeetupsResponse);
    } catch (err) {
      console.log("getUpcomingMeetups failed:", err);
      return null;
    }
  };
