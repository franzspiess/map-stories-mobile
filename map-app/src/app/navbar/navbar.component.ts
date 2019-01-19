import { Component, OnInit } from '@angular/core';
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

 private pictureUrl: string;

  constructor() { 
    this.pictureUrl = "";
  }

  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '314734805839026',
        cookie     : true,
        xfbml      : true,
        version    : 'v3.1'
      });
      FB.AppEvents.logPageView();
    };

    (function(d, s, id){
       var js, fjs = d.getElementsByTagName(s)[0];
       if (d.getElementById(id)) {return;}
       js = d.createElement(s); js.id = id;
       js.src = "https://connect.facebook.net/en_US/sdk.js";
       fjs.parentNode.insertBefore(js, fjs);
     }(document, 'script', 'facebook-jssdk'));
  }

  submitLogin(){
    console.log("submit login to facebook");
    
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            console.log('success')
            FB.api(
              '2632719756768141',
              {fields: 'picture,name'},
              function (response1) {
                if (response1 && !response1.error) {
                  console.log('login data', response1.picture.data.url);
                  this.pictureUrl = response1.picture.data.url;
                  console.log(this.pictureUrl);
                }
              }
            )
           }
           else
           {
           console.log('User login failed');
         }
      });



  }
}

