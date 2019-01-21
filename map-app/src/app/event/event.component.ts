import { Component, OnInit } from '@angular/core';
import { Event } from '../Models'

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  contructor() { }

  newEvent = new Event ();

  title = 'app';
  selectedFile = "";

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
<<<<<<< HEAD
    console.log('event',this.selectedFile)

=======
    console.log(this.selectedFile)
    
>>>>>>> de9b8b3cc81ef21f9909ad22027365ce73cac6a3
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }



  ngOnInit() {
    console.log(this.newEvent);

  }

  get diagnostic() { return JSON.stringify(this.newEvent); }

}
