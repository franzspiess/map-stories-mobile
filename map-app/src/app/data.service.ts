import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import htmlClient
import { Observable } from 'rxjs';
import { Story } from './Models';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTopic(): Observable<Story[]> {
    return this.http.get<Story[]>(`http://localhost/4000`);
  }


}
