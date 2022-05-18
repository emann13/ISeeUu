import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../service/firebase.service';
import { User } from '../module/user';
import { collectionSnapshots } from '@angular/fire/firestore';
import { map } from 'rxjs';
import { Hospitals } from '../module/hospials';
// import { doc, getDocFromCache } from "firebase/firestore";



export interface Cartoon {
  id: number;
  name: string;
}
@Component({
  selector: 'vitals-home',
  templateUrl: './vitals.component.html',
  styleUrls: ['./vitals.component.css']
})
export class VitalsComponent implements OnInit {
  isopen: boolean = false;
  icu: string = "";
  burns: boolean = false;
  uid: string="";
  user= new User();
  hospitals:any[]=[]; 
  dist = new Map<number,string>();
//  Hospitals = [
//     {
//       "name": "YTcome",
//       "type": "picu",
//       "locx": 10,
//       "locy": 6
//     },
//     {
//       "name": "bangtan",
//       "type": "picu",
//       "locx": 13,
//       "locy": 6
//     },
//    { "name": "JK.BB",
//       "type": "picu",
//       "locx": 1,
//       "locy": 9},

//       { "name": "RRm.148IQ",
//       "type": "ricu",
//       "locx": 22,
//       "locy": 9},

//       {"name": "YoongiMeow",
//       "type": "picu",
//       "locx": 9,
//       "locy": 3},

//       { "name": "Taechiwa",
//       "type": "picu",
//       "locx": 30,
//       "locy": 12},
//     ]
    


  


  @Output() isLogout = new EventEmitter<void>()
  constructor(private router: Router, public firebaseService: FirebaseService, private db: AngularFirestore) {

  }
  //  onCheckboxChange(event: any) {
  //   const selectedCountries = (this.form.controls.selectedCountries as FormArray);
  //   if (event.target.checked) {
  //     selectedCountries.push(new FormControl(event.target.value));
  //   } else {
  //     const index = selectedCountries.controls
  //     .findIndex(x => x.value === event.target.value);
  //     selectedCountries.removeAt(index);
  //   }
  // }

  ngOnInit() {
    collectionSnapshots(this.firebaseService.getAll()).pipe(
      map((changes) => {
        return changes.map((c) => {
          return ({ id: c.id, ...c.data() })
        })
      })
    ).subscribe(data => {
      this.hospitals = data;
    });
    // this.form = this.fb.group({
    //   name: this.fb.array([])
    // });
    // for(var i=0; i<this.hospitals.length; i++)
    // window.alert(this.hospitals[i]);
  }

  logout() {
    this.firebaseService.logout()
    this.isLogout.emit()
  }
  // checkCheckBoxvalue(event){

  // }
  w() {
    window.alert("picu");
  }

  //   public onSaveUsernameChanged(value:boolean){
  //     this.saveUsername = value;
  // }
getDist(x:number, y:number){
  for (var i = 0; i < this.hospitals.length; i++){   
    if (this.hospitals[i].type ==this.icu)
    this.dist.set(Math.ceil (Math.sqrt (Math.abs(Math.pow((x+this.hospitals[i].locationx),2) - Math.pow((y+this.hospitals[i].locationy),2)))),this.hospitals[i].name);
  }
  const sortedAsc = new Map([...this.dist].sort((a, b) => a[0] - b[0]));

 for (let [key, value] of sortedAsc) {
window.alert(key + " = " + value);
 }

}
  getVitals(locationx :unknown,locationy:unknown, age: unknown, HR: unknown, bp: unknown, RR: unknown, SPO2: unknown, tp: unknown) {
    // window.alert("picu");
    // var cov = document.getElementById("cov"); 
    // var cc = document.getElementById("cc"); 
    // var wk = document.getElementById("wk"); 
    // var n = document.getElementById("n"); 
    // var fa = document.getElementById("fa");
    // var sur = document.getElementById("sur"); 
    // var acc = document.getElementById("acc"); 
    //  this.burns= document.getElementById("burns"); 
    if ((age as number) <= 18) {
      this.icu = "picu";
      window.alert("picu");
    }
    else if ((age as number) <= 2) {
      this.icu = "nicu";

    } else if ((HR as number) > 140 || (HR as number) < 100) {
     if ((age as number) <= 18) {
        this.icu = "picu";}
        else if ((age as number) <= 2) {
          this.icu = "nicu";
    
        }

     else this.icu = "cicu";

    }
    else if ((RR as number) > 16 || (RR as number) < 12) {
      if ((age as number) <= 18) {
        this.icu = "picu";}
        else if ((age as number) <= 2) {
          this.icu = "nicu";
    
        }
     else this.icu = "ricu";
    }
    else {
      this.icu = "normal";
    }
    this.user.State=this.icu;
    this.firebaseService.updateState(this.icu)
    this.getDist(locationx as number,locationy as number);
    this.router.navigate(['ambulance']);

    // this.uid =this.firebaseService.getId();

    // const s= new FormGroup({
    //   icu: new FormControl(this.icu),



    //    });
    //  this.db.collection('signin').doc(this.uid).set(s);
    // window.alert(this.getMarker());

  }
  // getHos() {
  //   this.obj = this.db.collection('hospitals').get;
  //   return this.obj;


  // }
  // async getMarker() {
  //   const snapshot = await this.db.firestore.collection('hospitals').get()
  //   const p = snapshot.docs.map(doc => doc.data());
  //   Promise.resolve(p).then(function(value)){
  //     window.alert();
  //   }
  //   return
  // }
  // async getMarkers() {
  //   const events = await firebase.firestore().collection('events')
  //   events.get().then((querySnapshot) => {
  //       const tempDoc = []
  //       querySnapshot.forEach((doc) => {
  //          tempDoc.push({ id: doc.id, ...doc.data() })
  //       })
  //       console.log(tempDoc)
  //    })
  //  }

  // Close the dropdown menu if the user clicks outside of it

}