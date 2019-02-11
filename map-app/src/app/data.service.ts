import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'; // import htmlClient
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

  private url = 'http://localhost:4000/';

  constructor(private http: HttpClient) { }

  getStory(): Observable<Story[]> {
    return this.http.get<Story[]>(this.url + 'stories' );
  }
  getOneStory(id): Observable<Story> {
    return this.http.get<Story>(this.url + 'stories/' + id);
  }

  getAWSUrl (): Observable<any>{
    return this.http.get<any>(this.url + 'geturl',{
      headers: this.header
    })
  }

  uploadfileAWSS3(AWSData, contentType, file, name): Observable<any>{
    const formData = new FormData();
    Object.keys(AWSData.fields).forEach(key => {
      formData.append(key, AWSData.fields[key])
    });
    formData.append('key', `uploads/${name}.jpeg`);
    formData.append('file', file);
    return this.http.post(AWSData.url, formData)
  }

  postEvent (data:Event, id:string) {
    let myUrl= `${this.url}stories/${id}/event`;
    this.http.post(myUrl, data, {
      headers: this.header
    }).subscribe((res) => console.log('Server res',res))

  }

  postStory (data:Story) {
    let myUrl= `${this.url}stories`;
    this.http.post(myUrl, data, {
      headers: this.header
    }).subscribe((res:any) => console.log(res))
  }

}
