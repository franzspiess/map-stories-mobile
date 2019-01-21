import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // import htmlClient
import { Observable } from 'rxjs';
import { Story, Event } from './Models';



@Injectable({
  providedIn: 'root'
})
export class DataService {
 header = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer admin'
  });






  private url = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  getStory(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url + 'stories' );
  }

  postEvent (data:Event) {
    console.log(data);
    let myUrl= `${this.url}stories/5c430182c6cb7647019b7d98/event`;
    console.log(myUrl);
    this.http.post(myUrl, data, {
      headers: this.header
    }).subscribe((res:any) => console.log(res))

  }



}
