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

  getAWSUrl (): Observable<any>{
    return this.http.get<any>(this.url + 'geturl',{
      headers: this.header
    })
  }

  uploadfileAWSS3(AWSData, contentType, file): Observable<any>{
    //this will be used to upload all csv files to AWS S3
    //  const headers = new HttpHeaders({
    //    'Content-Type': contentType,
    //    'Access-Control':'Allow-Origin'});
    //  const req = new HttpRequest(
    //  'POST',
    //  AWSData.url,
    //  file,
    //  {
    //    headers: headers,
    //    reportProgress: true, //This is required for track upload process
    //  });
    //  return this.http.request(req);

    const formData = new FormData();
    Object.keys(AWSData.fields).forEach(key => {
      formData.append(key, AWSData.fields[key])
    });
    formData.append('key', 'uploads/');
    formData.append('file', file);



    return this.http.post(AWSData.url, formData)

  }

  postEvent (data:Event) {
    console.log(data);
    let myUrl= `${this.url}stories/5c430182c6cb7647019b7d98/event`;
    console.log(myUrl);
    this.http.post(myUrl, data, {
      headers: this.header
    }).subscribe((res) => console.log('Server res',res))

  }

  postStory (data:Story) {
    console.log(data);
    let myUrl= `${this.url}stories`;
    console.log(myUrl);
    this.http.post(myUrl, data, {
      headers: this.header
    }).subscribe((res:any) => console.log(res))
  }

}
