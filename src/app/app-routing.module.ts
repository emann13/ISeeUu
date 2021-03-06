import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HomeComponent } from './home/home.component';
import { VitalsComponent } from './vitals/vitals.component';

const routes: Routes = [
  {path :'home', component : HomeComponent },
  {path :'vitals', component : VitalsComponent },
  {path :'ambulance', component : AmbulanceComponent },



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
