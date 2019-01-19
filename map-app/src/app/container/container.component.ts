import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  title = 'app';
  selectedFile = null;

  onFileSelected(event)
  {
    this.selectedFile = event.target.files[0];
    
  }

  onUpload()
  {
    console.log(this.selectedFile); // You can use FormData upload to backend server
  }


  ngOnInit() {
  }

}
