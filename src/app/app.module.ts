import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environment/environment';
import { HomePageComponent } from './modules/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"sunquest-62a90","appId":"1:648849314151:web:4a67c249f5e1a29cf19fc2","storageBucket":"sunquest-62a90.firebasestorage.app","apiKey":"AIzaSyCAVaASCjikzai6HCRY7QolaKC0dTd7trA","authDomain":"sunquest-62a90.firebaseapp.com","messagingSenderId":"648849314151"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
