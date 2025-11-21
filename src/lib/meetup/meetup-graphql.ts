import { gql } from "graphql-request";
import { IMeetupEvent, MeetupResponse } from "./meetup.types";

// Meetup API test console: https://secure.meetup.com/meetup_api/console/?path=/:urlname/events
export const GQL_ENDPOINT = "https://api.meetup.com/gql-ext";

export const GROUP_URL_NAME = 'codestar-night';

export const eventsDocument = gql`
  query ($urlname: String!, $status: EventStatus, $sortOrder: SortOrder) {
    groupByUrlname(urlname: $urlname) {
      events(status: $status, sort: $sortOrder) {
        edges {
          node {
            title
            id
            eventUrl
            dateTime
            description
          }
        }
      }
    }
  }
`;

export const mapResponseToMeetupEvents = (response: MeetupResponse): Array<IMeetupEvent> => {
  return response.groupByUrlname.events.edges.map((edge) => {
    const { title, dateTime, eventUrl, description } = edge.node;
    return {
      name: title,
      time: dateTime,
      link: eventUrl,
      description,
    } as IMeetupEvent;
  });
};
