import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../service/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isOpen:boolean=false;
  isUser:boolean=false;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit(): void {
    this.firebaseService.user.subscribe((u: any)=>{
      if (u){
      this.isUser=true;
      }
      else{
        this.isUser=false;
      }
    }
    )}
    
  toggle(){
    this.isOpen=!this.isOpen;
    
  }

}