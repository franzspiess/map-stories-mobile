export class Editor {
  name: string;
  email: string;
  token: string;
  picture: string;
}

export class Story {
  editor: Editor;
  title: string;
  map: string;
  tagLine: string;
  duration: string;
  published: boolean;
  events:Event[];
}

export class Location {
  lat: number;
  lng: number;
}

export class Attachment {
  type: string;
  url: string;
  urlImg: string;
  title: string;
  text: string;

}

export class Event {
  constructor(
  public title?: string,
  public startTime?: string,
  public dateAndTime?: number,
  public mapLocation?: string,
  public location?: Location,
  public attachments?: Attachment
  ) {}
}
