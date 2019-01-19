import { Component, OnInit } from '@angular/core';
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private user: string;
  private token: string;


  constructor() { }

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

  submitLogin(){
    console.log("submit login to facebook");
    // FB.login();
    FB.login((response)=>
        {
          console.log('submitLogin',response);
          if (response.authResponse)
          {
            // console.log('success')
            this.user = response.authResponse.userID;
            this.token = response.authResponse.accessToken;

            console.log(this.token)
            return response;
            //login success
            //login success code here
            //redirect to home page
           }
           else
           {
           console.log('User login failed');
         }
      })

  }

}
