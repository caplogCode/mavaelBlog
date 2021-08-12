import { AngularFirestore } from "@angular/fire/firestore";
import { MavaelService } from "./pages/services/mavael.service";

import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnInit,
  ViewEncapsulation,
} from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import {
  AlertController,
  MenuController,
  Platform,
  ToastController,
} from "@ionic/angular";

import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { Storage } from "@ionic/storage";

import { AngularFireAuth } from "@angular/fire/auth";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent
  implements
    OnInit,
    AfterViewInit,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked
{
  appPages = [
    {
      title: "Feed",
      url: "/app/tabs/schedule",
      icon: "chatbubble-ellipses",
    },
    {
      title: "Entdecken",
      url: "/app/tabs/speakers",
      icon: "people",
    },
    {
      title: "Beitrag verfassen",
      url: "/add-post",
      icon: "pencil",
    },
    {
      title: "Favoriten",
      url: "../favorite-list",
      icon: "bookmark",
    },
  ];
  loggedIn = false;
  dark = false;
  userList: any = [];

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private afAuth: AngularFireAuth,
    public alertController: AlertController,
    private afs: AngularFirestore,
    private userService: MavaelService
  ) {
    this.initializeApp();
  }
  ngAfterViewChecked() {}
  ngAfterContentChecked() {}
  async ngAfterContentInit() {}
  async ngAfterViewInit() {
    this.presentAlertConfirm();
  }
  ionViewWillEnter() {}
  ionViewDidEnter() {
    let user = this.afAuth.currentUser;
    setTimeout(() => {
      if (user === null || user === undefined) {
        this.routeToLogin();
      } else return false;
    }, 1000);
  }

  async ngOnInit() {
    this.listenForLoginEvents();
    this.pushRelevantDataCorrect();
    this.updateLoggedInStatus(this.loggedIn);
    this.onUser();
    console.log("HAUPTSEITE WURDE AUFGEBAUT!");

    this.swUpdate.available.subscribe(async (res) => {
      const toast = await this.toastCtrl.create({
        message: "Update available!",
        position: "bottom",
        buttons: [
          {
            role: "cancel",
            text: "Reload",
          },
        ],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });

    this.userService.getUsers().subscribe((users) => {});
  }
  makeTutorialAgain() {
    this.storage.set("ion_did_tutorial", false);
    this.storage.set("ion_did_tutorial", false);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  async getUserNameViaAuth(): Promise<string> {
    let a: string = "";
    this.afAuth.currentUser.then((user) => (a = user.uid));
    return a;
  }
  pushRelevantDataCorrect() {
    setTimeout(() => {
      this.pushUserDataIntoDB();
    }, 1000);
  }
  pushUserDataIntoDB() {
    this.afAuth.currentUser.then((user) => {
      this.afs.collection("users").doc(user.uid).update({ uid: user.uid });

      this.afs
        .collection("users")
        .doc(user.displayName)
        .update({ username: user.uid });

      this.afs.collection("users").doc(user.email).update({ email: user.uid });
    });
  }
loginStatus(): boolean{
if(this.loggedIn === false || this.loggedIn === null || this.loggedIn === undefined){
return false
}
}
  getUsernameFormQuery(uid: string) {}
  async presentToast(msg: any, option: any) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 2000,
      color: option,
    });
    toast.present();
  }
  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.onUser();
    }, 1000);
  }

  listenForLoginEvents() {
    window.addEventListener("user:login", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:signup", () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener("user:logout", () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.afAuth.signOut();
    this.storage.clear();
    this.menu.enable(false);
    this.router.navigateByUrl("/login");
  }

  routeToLogin() {
    this.router.navigateByUrl("/login");
  }

  async getAuthUsername(): Promise<string> {
    const uid = (await this.afAuth.currentUser).displayName;
    document.getElementById("userInputName").innerText = uid;
    return uid;
  }

  lookForLoggedInUser(): boolean {
    this.afAuth.currentUser.then((user) => {
      document.getElementById("userInputName").innerHTML = user.displayName;
      if (user !== null || user !== undefined) {
        return false;
      }
    });
    return true;
  }
  onUser() {
    this.afAuth.currentUser.then((user) => {
      document.getElementById("userInputName").innerHTML = user.displayName;
      if (user !== null || user !== undefined) {
        this.loggedIn = true;
      }

      if (
        user.displayName !== "" ||
        user.displayName !== null ||
        user.displayName !== undefined
      ) {
      }
    });
  }
  async presentAlertConfirm() {
    await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message: "Message <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Okay",
          handler: () => {
            this.onUser();
          },
        },
      ],
    });
  }
  openTutorial() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
    this.router.navigateByUrl("/tutorial");
  }

  async presentAlertForLogOut() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Abmelden",
      message: "<strong>Möchtest du dich abmdelden?</strong>",
      buttons: [
        {
          text: "Abbrechen",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "Okay",
          handler: () => {
            this.logout();
          },
        },
      ],
    });

    await alert.present();
  }
}
