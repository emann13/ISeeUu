import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { addDoc, Firestore, collection, doc, updateDoc, setDoc, getDoc } from "@angular/fire/firestore";
import * as firebase from 'firebase/compat';
import { getAuth, onAuthStateChanged } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class DBService {

  isLoggedIn = false
  uid:any;
  
  auth=getAuth();

  constructor(public firebaseAuth : AngularFireAuth,private _AngularFirestore :AngularFirestore, private firestore: Firestore ) { 

  }

  getId(){
    this.auth.onAuthStateChanged((user=> {

      if(user){
         this.uid=user.uid;}

  }))
    // this.uid=localStorage.getItem('uid');
    // window.alert(this.uid);
    // var user = firebase.auth().currentUser;
    return this.uid;
    
  } 
  addInfos(infos: any) {
    const notesRef = collection(this.firestore, "SignUp");
    return setDoc(doc(notesRef, this.getId()), infos)
  }
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
      this.addInfos('user');

      
      
        
    })
  }
  logout(){
    this.firebaseAuth.signOut()
    localStorage.removeItem('user')
  }
}
