import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AmbulanceComponent } from './ambulance/ambulance.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VitalsComponent } from './vitals/vitals.component';
import { RouterModule } from '@angular/router';
import { FirebaseService } from './service/firebase.service';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

const routes = [
  {path :'home', component : HomeComponent },
  {path :'vitals', component : VitalsComponent },
  {path :'ambulance', component : AmbulanceComponent },


];
@NgModule({
  declarations: [
    AppComponent,
    AmbulanceComponent,
    HomeComponent,
    NavbarComponent,
    VitalsComponent
  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
