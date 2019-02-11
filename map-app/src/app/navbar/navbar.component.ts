import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private user: string;
  private token: string;
  private pictureUrl: string;
  private loggedIn: boolean = false;

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
    FB.login((response)=>
        {
          if (response.authResponse)
          {
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
      (response) => this.logInWithData(response)
    )
  }

  logInWithData(response: any) {
    if (response && !response.error) {
      this.pictureUrl = response.picture.data.url;
      this.loggedIn = true;
    }
  }
}

