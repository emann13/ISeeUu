import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'vitals-home',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  isopen:boolean=false
  icu: string="";
  burns : boolean=false; 



  @Output() isLogout = new EventEmitter<void>()
  constructor(private router: Router,public firebaseService: FirebaseService) { }

  ngOnInit(): void {}
   
  logout(){
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  // checkCheckBoxvalue(event){

  // }
  w(){
    window.alert("picu");
  }
  getVitals(age:unknown,HR:unknown, bp:unknown,RR:unknown,SPO2:unknown,cs:unknown,tp:unknown){
    // window.alert("picu");
    var cov = document.getElementById("cov"); 
    var cc = document.getElementById("cc"); 
    var wk = document.getElementById("wk"); 
    var n = document.getElementById("n"); 
    var fa = document.getElementById("fa");
    var sur = document.getElementById("sur"); 
    var acc = document.getElementById("acc"); 
    //  this.burns= document.getElementById("burns"); 
    if ((age as number )<=18){
           this.icu="picu"  ;
           window.alert("picu");
    }
    else if ((age as number )<=2){
      this.icu="nicu"  ;

}

  }
  
  // Close the dropdown menu if the user clicks outside of it
 
}