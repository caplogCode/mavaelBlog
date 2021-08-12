import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from "@angular/fire/firestore/";
import {
  AlertController,
  IonList,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
  Config,
  MenuController,
} from "@ionic/angular";
@Component({
  selector: "app-temp-loading",
  templateUrl: "./temp-loading.page.html",
  styleUrls: ["./temp-loading.page.scss"],
})
export class TempLoadingPage implements OnInit {
  isUserAlreadyAuth: boolean;
  isUserFirstTime: boolean;
  constructor(
    private menu: MenuController,
    private router: Router,
    private loadingController: LoadingController,
    private storage: Storage,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  ionViewWillEnter() {
    //this.authReady();
    this.pushUserDataToDatabase()
  }

  async ngOnInit() {
   // this.authReady();
    
    this.menu.enable(false);
    const loading = await this.loadingController.create({
      spinner: "dots",
      message: "Bitte warten..",
      translucent: true,
      duration: 1000,
      cssClass: "custom-class custom-loading",
      backdropDismiss: false,
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();

    if (this.isUserAlreadyAuth) loading.dismiss();
  }

  rootTo(route: string) {
    this.router.navigateByUrl(route);
  }

  pushUserDataToDatabase(){
    setTimeout(() => {
      this.afAuth.currentUser.then((user) => {
 
        this.afs.collection("users").doc(user.uid)
        .set({
          name: user.displayName,
          email: user.email,
          uid: user.uid,
          createdAt: user.metadata.creationTime.toString()
        }
        )
      }).then((value) =>{
        this.authReady()
      })
    }, 400);
  }

  authReady() {
    setTimeout(() => {
      this.afAuth.currentUser.then((user) => {
        if (user.metadata.creationTime === user.metadata.lastSignInTime) {
          this.rootTo("/video-intro-player");
        } else if (
          !(user.metadata.creationTime === user.metadata.lastSignInTime)
        ) {
          this.rootTo("/app/tabs/schedule");
        }
      });
    }, 500);
  }
}
