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

export class MapLoc {
  lng: number;
  lat: number;
}

export class Attachment {
  urlImg?: string;
  type?: string;
  title?: string;
  text?: string;

}

export class Event {
  constructor(
  public title?: string,
  public startTime?: string,
  public dateAndTime?: number,
  public mapLocation?: string,
  public location?: MapLoc,
  public attachments?: Attachment[]
  ) {}
}
