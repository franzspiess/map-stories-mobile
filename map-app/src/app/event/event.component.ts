import { Component, OnInit } from '@angular/core';
import { Event } from '../Models'

import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  contructor() { }

  newEvent = new Event ();

  public imagePath;
  iosPhoto: File;
  imageUrl: any;
  

  onFileSelected(event)
  {
    this.iosPhoto = event.target.files[0];
    const reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(this.iosPhoto);
    reader.onload = (_event) => {this.imageUrl = reader.result;}
  }

  
  onUpload()
  {
    const s3 = new S3(
      {
        accessKeyId: 'AKIAIGN6OJQFPUNLC4VA',
        secretAccessKey: '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',
        region: 'eu-west-2'
      }
    );
 
    const params = {
      Bucket: 'legacy-cw',
      Key: '/' + this.iosPhoto.name,
      Body: this.iosPhoto,
      // ACL: 'public-read',
    };
 
    s3.upload(params, function (err, data) {
      if (err) {
        console.log('There was an error uploading your file: ', err);
        return false;
      }
 
      console.log('Successfully uploaded file.', data);
      return true;
    });

    console.log(this.iosPhoto);
  
  }

  ngOnInit() {
    console.log(this.newEvent);
  }

  get diagnostic() { return JSON.stringify(this.newEvent); }

}
