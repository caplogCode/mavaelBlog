import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FormsModule } from '@angular/forms';

//Firebase
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'

//Env
import { environment } from '../environments/environment.prod';

//Auth
import {firebase, firebaseui, FirebaseUIModule} from 'firebaseui-angular';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

//SQL-Lite Intern Storage
import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';

//Video-Intro Player
import { VideoPlayer } from '@ionic-native/video-player/ngx';

export const firebaseVAR = firebase.initializeApp(environment.firebaseConfig)
export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
};
export var uiConfig = {
  callbacks: {
/*     signInSuccessWithAuthResult: function(authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      return true;
    }, */
/*     uiShown: function() {
      // The widget is rendered.
      // Hide the loader.
      //document.getElementById('loader').style.display = 'none';
    } */
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: '/temp-loading',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.PhoneAuthProvider.PROVIDER_ID
  ],
  // Terms of service url.
  tosUrl: '/terms',
  privacyPolicyUrl: '/privacy',
};


@NgModule({
  imports: [
    IonicModule.forRoot(),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FirebaseUIModule.forRoot(uiConfig)
  ],
  declarations: [AppComponent],
  providers: [InAppBrowser, SplashScreen, StatusBar, FirebaseAuthentication, AngularFireAuth, VideoPlayer],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
