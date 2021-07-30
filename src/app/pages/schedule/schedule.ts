import { AngularFirestore } from "@angular/fire/firestore/";
import { BlogPost } from "./../../models/mavael";
import { PostsService } from "../services/posts.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, ViewChild, OnInit } from "@angular/core";
import { Router } from "@angular/router";
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

import { ScheduleFilterPage } from "../schedule-filter/schedule-filter";
import { ConferenceData } from "../../providers/conference-data";
import { UserData } from "../../providers/user-data";
import { SignUpModule } from "../signup/signup.module";
import { Storage } from "@ionic/storage";
@Component({
  selector: "page-schedule",
  templateUrl: "schedule.html",
  styleUrls: ["./schedule.scss"],
  providers: [PostsService],
})
export class SchedulePage implements OnInit {
  posts: any = [];
  // Gets a reference to the list element
  @ViewChild("scheduleList", { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  counter = 0
  segmentModel = "feed";

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private storage: Storage,
    private postService: PostsService,
    private afs: AngularFirestore
  ) {}

  async ngOnInit() {
    this.updateSchedule();
    this.menu.enable(true);
    this.ios = this.config.get("mode") === "ios";
    //this.storage.set('username', await this.getAuthUsername())
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts
      this.counter = posts.length
    });
  }

  doRefresh(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      console.log('Async operation has ended');
      window.location.reload()
      event.target.complete();
    }, 2000);
  }

  editPost(postId) {
    this.router.navigate([`/app/tabs/schedule/session/${postId}/`]);
    //this.router.navigate(['/post-editer/',postId])
  }

  async done(postId) {
    const loading = await this.loadingCtrl.create({
      message: "Post wird gespeichert...",
      spinner: "crescent",
      showBackdrop: true,
    });
    //loading.present()
    let uid = (await this.afAuth.currentUser).uid.toString()
    let title = ""
    let body = ""
    let timestamp = ""
    let user = ""
    
/*     this.afs.collection('users').doc(uid)
    .collection('savedPosts').doc(postId)
    .set({
      'title' this.
    })*/
  } 

  getAllPosts(): number {
    return this.counter;
  }

  async deletePost(postId) {
    const loading = await this.loadingCtrl.create({
      message: "Post wird gelöscht...",
      spinner: "crescent",
      showBackdrop: true,
    });
    loading.present();

    this.afs
      .collection("posts")
      .doc(postId)
      .delete()
      .then(() => {
        loading.dismiss();
        this.toast("Post wurde erfolgreich gelöscht!", "success");
      })
      .catch((error) => {
        this.toast(
          "Etwas ist schiefgelaufen beim Löschen des Posts..." + error,
          "danger"
        );
        loading.dismiss();
      });
  }
  async toast(msg, status) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "bottom",
      color: status,
      duration: 2000,
    });
    toast.present();
  }
  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    this.confData
      .getTimeline(
        this.dayIndex,
        this.queryText,
        this.excludeTracks,
        this.segment
      )
      .subscribe((data: any) => {
        this.shownSessions = data.shownSessions;
        this.groups = data.groups;
      });
  }
  segmentChanged(event){
    console.log(this.segmentModel);
    console.log(event);
  }
  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: ScheduleFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updateSchedule();
    }
  }

  /*   async getAuthUsername():Promise<string> {
    const uid = (await this.afAuth.currentUser).displayName
    document.getElementById('userInputName').innerText = uid 
    return uid
} */
  testSignature(user): boolean {
    var b = "";
    this.posts.forEach(function (a) {
      if (user === a.uid) //console.log(user);
      b = a.uid;
    });
    if (user === b) {
      return true;
    } else return false;
  }

  postHandlerColor(user): string {
    if (this.testSignature(user) === true) {
      return "success";
    }
    if (this.testSignature(user) === false) return "danger";
  }

  postSignatureHandler(user): string {
    if (this.testSignature(user) === true) {
      return "DEIN POST";
    } if(this.testSignature(user) === false)
     return "NICHT DEIN POST";
  }
  navToPost() {
    this.router.navigateByUrl("/app/tabs/map");
  }

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, "Favorite already added");
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [
          {
            text: "Close",
            role: "cancel",
          },
        ],
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }
  }

  async removeFavorite(
    slidingItem: HTMLIonItemSlidingElement,
    sessionData: any,
    title: string
  ) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: "Would you like to remove this session from your favorites?",
      buttons: [
        {
          text: "Cancel",
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
        {
          text: "Remove",
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          },
        },
      ],
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: Math.random() * 1000 + 500,
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
