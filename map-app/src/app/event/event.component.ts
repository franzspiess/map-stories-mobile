import { Component, OnInit } from '@angular/core';
import { Event } from '../Models'
import { DataService } from '../data.service';
import {HttpEvent} from '@angular/common/http'



@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  constructor(private apiService: DataService) { }

  newEvent = new Event ();

  private AWSData: any;

  public imagePath;
  iosPhoto: File;
  imageUrl: any;


  onFileSelected(event)
  {
    this.iosPhoto = event.target.files[0];
    const reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(this.iosPhoto);
    console.log('iosphoto',this.iosPhoto);
    reader.onload = (_event) => {this.imageUrl = reader.result;}
  }

  onUpload () {
    this.apiService.uploadfileAWSS3(this.AWSData, 'image/jpeg', this.iosPhoto)
      .subscribe((event:HttpEvent<any>) => {console.log(event);
      })

  }




  ngOnInit() {

    this.getAWSUrl();



  }

  getAWSUrl (): void {
    this.apiService.getAWSUrl()
    .subscribe(data => {
      this.AWSData = data;
    })

  }

  postEvent (data): void {
    console.log(data);
    this.apiService.postEvent (data);
  }

  get diagnostic() { return JSON.stringify(this.newEvent); }

}


  // onUpload()
  // {
  //   const s3 = new S3(
  //     {
  //       accessKeyId: 'AKIAJL52JLSRVP23CF2A',
  //       secretAccessKey: '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',
  //       region: 'eu-west-3'
  //     }
  //   );

  //   const params = {
  //     Bucket: 'map-story',
  //     Key: '/' + this.iosPhoto.name,
  //     Body: this.iosPhoto,
  //     ACL: 'public-read',
  //   };

  //   s3.upload(params, function (err, data) {
  //     if (err) {
  //       console.log('There was an error uploading your file: ', err);
  //       return false;
  //     }

  //     console.log('Successfully uploaded file.', data);
  //     return true;
  //   });

  //   console.log(this.iosPhoto);

  // }

  // {
  //   "Version": "2012–10–17",
  //   "Id": "<policy-id>",
  //   "Statement": [
  //   {
  //   "Sid": "<sid>",
  //   "Effect": "Allow",
  //   "Principal": {
  //   "AWS": "arn:aws:iam::<awsaccount>:user/<awsusername>"
  //   },
  //   "Action": "s3:*",
  //   "Resource": "arn:aws:s3:::<s3-bucket-name>"
  //   }
  //   ]
  //  }