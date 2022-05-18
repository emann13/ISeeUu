import { Component, OnInit } from '@angular/core';
import { VitalsComponent } from '../vitals/vitals.component';

@Component({
  selector: 'app-ambulance',
  templateUrl: './ambulance.component.html',
  styleUrls: ['./ambulance.component.css']
})
export class AmbulanceComponent implements OnInit {

  constructor(public vit:VitalsComponent) {
    // icu=this.vit.icu;
   }

  ngOnInit(): void {
  }

}
