import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit{
  private readonly newProperty = 'home-root';

  title = 'ISeeU';
  isSignedIn = false
  
  constructor(private router: Router,  public firebaseService : FirebaseService){}
  
  goToHome() {
    this.router.navigate(['vitals']);
  }
  ngOnInit(){
    if(localStorage.getItem('user')!== null)
    this.isSignedIn= true
    else
    this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
   {     this.router.navigate(['vitals']);

    this.isSignedIn = true;  }
    
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
   { this.router.navigate(['vitals']);
    window.alert("welcome!")
    this.isSignedIn = true;
  
  }
  }
  handleLogout(){
    this.isSignedIn = false

  }
  
  // writeUserData(userId : number , name, email, imageUrl) {
  //   firebase
  //     .database()
  //     .ref('users/' + userId)
  //     .set({
  //       username: name,
  //       email: email,
  //       profile_picture: imageUrl,
  //     });
  // }
}