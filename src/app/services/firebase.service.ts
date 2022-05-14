import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth'
import { HomeComponent } from '../home/home.component';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { getAuth, onAuthStateChanged } from "firebase/auth";

@Injectable({
  providedIn: 'any',
})
export class FirebaseService {

  isLoggedIn = false
  auth = getAuth();
  user = this.auth.currentUser;


 
  constructor(public firebaseAuth : AngularFireAuth,private _AngularFirestore :AngularFirestore) { }
  idd(){
  if (this.user != null) {
    const uid = this.user.uid;
    this._AngularFirestore.collection('signUp').add(uid);
    window.alert(uid);
  }}
  async signin(email: string, password : string){
    await this.firebaseAuth.signInWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
    })
  }
  async signup(email: string, password : string){
    await this.firebaseAuth.createUserWithEmailAndPassword(email,password)
    .then(res=>{
      this.isLoggedIn = true
      localStorage.setItem('user',JSON.stringify(res.user))
      this.idd();
        
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
  
}