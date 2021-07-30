import { AngularFirestore } from '@angular/fire/firestore';

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { AlertController, MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit, AfterContentChecked, AfterViewChecked {
  appPages = [
    {
      title: 'Feed',
      url: '/app/tabs/schedule',
      icon: 'chatbubble-ellipses'
    },
    {
      title: 'Empfehlungen',
      url: '/app/tabs/speakers',
      icon: 'people'
    },
    {
      title: 'Beitrag verfassen',
      url: '/add-post',
      icon: 'map'
    },
    {
      title: 'Über uns',
      url: '/app/tabs/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public alertController: AlertController,
    private afs: AngularFirestore
  ) {
    this.initializeApp();
  }
  ngAfterViewChecked() {

  }
  ngAfterContentChecked() {


  }
 async ngAfterContentInit() {
  
  }
 async ngAfterViewInit() {
this.presentAlertConfirm()

  }
  ionViewWillEnter(){
    
  }
  ionViewDidEnter(){

  }


  async ngOnInit() {
    this.checkLoginStatus();
    this.listenForLoginEvents();
    this.pushRelevantDataCorrect();
    console.log("HAUPTSEITE WURDE AUFGEBAUT!")

    this.swUpdate.available.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  pushRelevantDataCorrect(){
        setTimeout(() => {
this.pushUserDataIntoDB()
    }, 1000);
  }
pushUserDataIntoDB(){

  this.afAuth.currentUser.then((user)=>{

    this.afs.collection("users").doc(user.uid)
    .set({
      "uid": user.uid,
      "username": user.displayName,
      "email": user.email
    })
  })
  
}
async presentToast(msg: any, option: any) {
  const toast = await this.toastCtrl.create({
    message: msg,
    duration: 2000,
    color: option
  });
  toast.present();
}
  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.onUser()
    }, 1000);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
     this.storage.clear()
      this.userData.logout().then(() => {
      return this.router.navigateByUrl('/login');
    }).catch((error) =>{
      this.presentToast(error, 'danger')
    })
  }
  

  
  routeToLogin() {
    this.router.navigateByUrl('/login')
  }




   async getAuthUsername():Promise<string> {
        const uid = (await this.afAuth.currentUser).displayName
        document.getElementById('userInputName').innerText = uid 
        return uid
  }

 
   onUser(){
  this.afAuth.currentUser.then((user)=>{
   document.getElementById('userInputName').innerHTML = user.displayName 
   if(user !== null || user !== undefined){
     this.loggedIn = false
   }
   console.log(user.displayName)
  })

  }
  async presentAlertConfirm() {
   await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.onUser()
            console.log('Confirm Okay');
          }
        }
      ]
    });

  
  }
  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }


  async presentAlertForLogOut() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Abmelden',
      message: '<strong>Möchtest du dich abmdelden?</strong>',
      buttons: [
        {
          text: 'Abbrechen',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.logout()
          }
        }
      ]
    });

    await alert.present();
  }
}
