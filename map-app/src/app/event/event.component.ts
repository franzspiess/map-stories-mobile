import { Component, OnInit } from '@angular/core';
import {Event} from '../Models'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  newEvent = new Event ();


  contructor() { }

  ngOnInit() {
    console.log(this.newEvent);

  }

}
