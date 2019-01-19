import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import htmlClient
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getTopic(): Observable<Topic[]> {
    return this.http.get<Topic[]>(`http://localhost/4000`);
  }


}
