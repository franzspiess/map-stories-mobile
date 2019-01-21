import { Component, OnInit } from '@angular/core';
import {Event} from '../Models'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  newEvent = new Event ();

  title = 'app';
  selectedFile = null;

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
    console.log('event',this.selectedFile)

  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }


  contructor() { }

  ngOnInit() {
    console.log(this.newEvent);

  }

  get diagnostic() { return JSON.stringify(this.newEvent); }

}
