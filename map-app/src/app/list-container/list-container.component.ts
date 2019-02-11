import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Story } from '../Models';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.scss']
})
export class ListContainerComponent implements OnInit {

  private stories: Story[];

  constructor(private apiService: DataService) { }

  getStory (): void{
    this.apiService.getStory()
    .subscribe((data) => {
      this.stories = data;
    })
  }

  ngOnInit() {
    this.getStory();
  }

}
