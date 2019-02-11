<!-- 
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
  //  } -->