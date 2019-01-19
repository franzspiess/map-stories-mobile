import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Story } from '../Models';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  private topic: Story[];

  constructor(private apiService: DataService) { }

  getStory() {
    this.apiService.getTopic().subscribe((data, any) => {
      this.story = data;
    })
  }

  ngOnInit() {
    this.getStory();
  }

}
