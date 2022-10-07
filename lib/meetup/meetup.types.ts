export interface IMeetupEvent {
  name: string;
  time: string;
  link: string;
  description: string;
  featured_photo: string;
}

export type MeetupResponse = Array<IMeetupEvent>;
