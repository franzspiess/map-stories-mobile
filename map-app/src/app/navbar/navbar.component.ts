import { Component, OnInit, DoCheck } from '@angular/core';
import { getViewData } from '@angular/core/src/render3/state';
import { AngularWaitBarrier } from 'blocking-proxy/built/lib/angular_wait_barrier';
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit{
  private user: string;
  private token: string;
  private pictureUrl: string;
  loggedIn = false;


  constructor() {

  }


  ngOnInit() {
    (window as any).fbAsyncInit = function() {
      FB.init({
        appId      : '2543129815913697',
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

  // ngDoCheck () {
  //   this.getData();
  // }


  submitLogin(){
    console.log("submit login to facebook");
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            // console.log('success')
            console.log(this.user);
            this.user = response.authResponse.userID;
            this.token = response.authResponse.accessToken;
            this.getData();
           }
           else
           {
            console.log('User login failed');
          }
      })
  }

  getData  () {
    FB.api(
      this.user,
      {fields: 'picture, name'},
      (response) => {
        if (response && !response.error) {
          this.pictureUrl = response.picture.data.url;
          this.loggedIn = true;
          console.log("from getdata", this);

        }
      }
    )
  }
}

