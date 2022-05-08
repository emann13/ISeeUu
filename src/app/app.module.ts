import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {AngularFireModule} from '@angular/fire'
import {AngularFireModule} from '@angular/fire/compat';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    AppComponent
   // HomeComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
    apiKey: "AIzaSyBoTOIr3Gqh6EcYsXhjWv31KeefL1KKTBQ",
  authDomain: "iseeu-81908.firebaseapp.com",
  projectId: "iseeu-81908",
  storageBucket: "iseeu-81908.appspot.com",
  messagingSenderId: "770618320078",
  appId: "1:770618320078:web:234f17b4468f9d20125c9f",
  measurementId: "G-X5CGJLTZ5P"
    })
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }