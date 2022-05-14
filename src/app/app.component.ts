import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isopen:boolean=false


  @Output() isLogout = new EventEmitter<void>()
  constructor(private router: Router) { }

  ngOnInit(): void {}
   
  
  
  
  // Close the dropdown menu if the user clicks outside of it
 
}