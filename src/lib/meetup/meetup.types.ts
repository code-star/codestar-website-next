export interface IMeetupEvent {
  name: string;
  time: string;
  link: string;
  description: string;
  featured_photo?: {
    photo_link: string;
    thumb_link: string;
  };
}

export type MeetupResponse = {
  groupByUrlname: {
    events: {
      edges: Array<{
        node: {
          title: string;
          id: string;
          eventUrl: string;
          dateTime: string;
          description: string;
        };
      }>;
    };
  };
}