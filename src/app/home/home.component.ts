import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { User } from '../module/user';
import { FirebaseService } from '../service/firebase.service';
import { DBService } from '../services/db.service';
// import * as firebase from 'firebase/compat';
// import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'home-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class  HomeComponent implements OnInit{
  private readonly newProperty = 'home-root';
  
  title = 'ISeeU';
  isSignedIn = false
  user=new User();
  
  constructor(private router: Router,  private db:DBService,private firebaseService:FirebaseService){}
  
  goToHome() {
    this.router.navigate(['vitals']);
  }
  ngOnInit(){
    // if(localStorage.getItem('user')!== null)
    // this.isSignedIn= true
    // else
    // this.isSignedIn = false
  }
  async onSignup(email:string,password:string){
    await this.firebaseService.signup(email,password)
    if(this.firebaseService.isLoggedIn)
    {          
       
     this.router.navigate(['vitals']);
    this.isSignedIn = true;  }
    this.user.Email=email;
    this.user.Password=password;
    this.firebaseService.newdoc(this.user)
    //   window.alert(data)
    // })
    
  }

  async onSignin(email:string,password:string){
    await this.firebaseService.signin(email,password)
    if(this.firebaseService.isLoggedIn)
   {                   
     this.router.navigate(['vitals']);
    // window.alert("welcome!")
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