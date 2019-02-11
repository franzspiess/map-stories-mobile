export class Editor {
  _id?: string;
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
  events: Event[];
}

export class MapLoc {
  lng: number;
  lat: number;
}

export class Attachment {
  imageUrl?: string;
  type?: string;
  title?: string;
  text?: string;

}

export class Event {
  constructor(
    public user?: string,
    public title?: string,
    public startTime?: string,
    public dateAndTime?: number,
    public mapLocation?: string,
    public coordinates?: MapLoc[],
    public attachments?: Attachment[]
  ) { }
}
