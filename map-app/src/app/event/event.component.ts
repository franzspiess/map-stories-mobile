import { Component, OnInit } from '@angular/core';
import { Event } from '../Models'
import { DataService } from '../data.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private apiService: DataService) { }

  newEvent = new Event ();

  title = 'app';
  selectedFile = "";

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
    console.log('event',this.selectedFile)

  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }



  ngOnInit() {
    console.log(this.newEvent);

  }

  postEvent (data): void {
    console.log(data);
    this.apiService.postEvent (data);
  }

  get diagnostic() { return JSON.stringify(this.newEvent); }

}
