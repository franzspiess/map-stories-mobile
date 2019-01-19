import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import htmlClient
import { Observable } from 'rxjs';
import { Story } from './Models';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'http://192.168.1.207:4000/'

  constructor(private http: HttpClient) { }

  getStory(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url + 'stories' );
  }


}
