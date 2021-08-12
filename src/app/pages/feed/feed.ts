import { BlogPost, Mavael } from "./../../models/mavael";
import { MavaelService } from "../services/mavael.service";
import { AngularFirestore } from "@angular/fire/firestore/";
import { PostsService } from "../services/posts.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
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
import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";

import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";

import { FeedFilterPage } from "../feed-filter/feed-filter";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-feed",
  templateUrl: "feed.html",
  styleUrls: ["./feed.scss"],
  providers: [PostsService],
})
export class FeedPage implements OnInit, AfterViewInit {
  posts: any = [];
  ownPosts: any = [];
  ownPostArray: BlogPost;
  ownPostsList: any = [];
  @ViewChild("scheduleList", { static: true }) scheduleList: IonList;

  ios: boolean;
  dayIndex = 0;
  queryText = "";
  segment = "all";
  excludeTracks: any = [];
  shownSessions: any = [];
  tagsSet: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  counter = 0;
  ownPostsCounter = 0;
  segmentModel = "feed";
  tags: string = "";
  userFireUID: string = "";
  ownPostCount = 0;
  blogCol: AngularFirestoreCollection<BlogPost>;
  blogDoc: AngularFirestoreDocument<BlogPost>;
  users: Observable<Mavael[]>;
  usersPosts: Observable<BlogPost[]>;
  user: Observable<Mavael>;
  userPost: Observable<BlogPost>;

  constructor(
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public config: Config,
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private storage: Storage,
    private postService: PostsService,
    private afs: AngularFirestore,
    private userService: MavaelService
  ) {}
  getUsersOwnPosts() {
    return this.usersPosts;
  }
  ngAfterViewInit() {
    this.storage.set("firstTimeAuth", false);
  }

  ionViewWillEnter() {
    let user = this.afAuth.currentUser;

    if (!user === null || user === undefined) {
      this.router.navigateByUrl("/temp-loading");
    }
    setTimeout(() => {
      this.getUID();
    }, 500);
  }

  lookForUser(user: string): boolean {
    if (user === null || user === undefined || user === "") {
      this.router.navigate(["/temp-loading"]);
      return false;
    }
  }
  async ngOnInit() {
    let user = this.afAuth.currentUser;

    if (user === null || user === undefined) {
      this.router.navigateByUrl("/temp-loading");
    }
    this.menu.enable(true);
    this.ios = this.config.get("mode") === "ios";

    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.counter = posts.length;
    });
//Es wird auf allen Posts gemappt und asyncron gespeichert, damit man ggf. auch ohne Internet Connection in realtime weiter machen kann
    setTimeout(() => {
      this.getUID();
    }, 500);
    setTimeout(() => {
      this.blogCol = this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("ownPosts", (ref) =>
          ref.orderBy("timestampMillis", "desc")
        );

      this.usersPosts = this.blogCol.snapshotChanges().pipe(
        map((action) => {
          return action.map((a) => {
            const data = a.payload.doc.data() as BlogPost;
            data.postId = a.payload.doc.id;
            return data;
          });
        })
      );
      this.getUsersOwnPosts().subscribe((ownPosts) => {
        this.ownPostsList = ownPosts;
        this.ownPostsCounter = ownPosts.length
      });
    }, 600);

    this.getUID();
    this.storage.set("uidUser", this.userFireUID);
  }

  doRefresh(event) {
    console.log("Asynchrones Laden beginnen");
    setTimeout(() => {
      console.log("Asynchrones Laden fertig");
      window.location.reload();
      event.target.complete();
    }, 2000);
  }



  async getUID() {
    let userUUID = "";
    this.afAuth.currentUser.then((value) => {
      userUUID = value.uid;
      this.userFireUID = userUUID;
      this.storage.set("isUser", false)
      this.userService.getUser(value.uid).subscribe((user) =>{
        this.storage.set("userIdCurrent", this.userFireUID);
      this.storage.set("userNameCurrent", user.name)
        this.storage.set("userHobbyCurrent", user.hobby)
        this.storage.set("userBeschreibungCurrent", user.beschreibung)
      })
    });
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
  }

  getAllPosts(): number {
    if(this.segmentModel === "feed")
    return this.counter;
    if(this.segmentModel === "news")
    return this.ownPostsCounter
  }
  async presentFullPost(title: any, body: any, author: any) {
    const alert = await this.alertCtrl.create({
      cssClass: "my-custom-class",
      header: title,
      subHeader: "von " + author,
      message: body,
      buttons: ["OK"],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
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
        this.afs
          .collection("users")
          .doc(this.userFireUID)
          .collection("ownPosts")
          .doc(postId)
          .delete();
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
  segmentChanged(event) {
    console.log(this.segmentModel);
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: FeedFilterPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks },
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
    }
  }

  testSignature(user): boolean {
    var b = "";
    this.posts.forEach(function (a) {
      if (user === a.uid) b = a.uid;
    });
    if (user === b) {
      return true;
    } else return false;
  }
  testUserPost(uid: string): string {
    let a = "";
    if (this.userFireUID === uid) {
      a = "DEIN POST";
    }
    return a;
  }
  lookForBadgeToShow(uid: string): boolean {
    if (this.userFireUID === uid) {
      return true;
    }
    return false;
  }
  isPostLikeable(uid: string): boolean {
    if (this.userFireUID === uid) {
      return true;
    }
    return false;
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
    }
    if (this.testSignature(user) === false) return "NICHT DEIN POST";
  }
  navToPost() {
    this.router.navigateByUrl("/app/tabs/map");
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
            slidingItem.close();
          },
        },
        {
          text: "Remove",
          handler: () => {
            slidingItem.close();
          },
        },
      ],
    });
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

  enableChips(nm: number) {
    let loveChip = document.getElementById("love-chip");
    let freiChip = document.getElementById("frei-chip");
    let busiChip = document.getElementById("busi-chip");
    let randChip = document.getElementById("rand-chip");
    let sontChip = document.getElementById("sont-chip");

    if (nm === 1) {
      loveChip.style.visibility = "visible";
    }
    if (nm === 2) {
      freiChip.style.visibility = "visible";
    }
    if (nm === 3) {
      busiChip.style.visibility = "visible";
    }
    if (nm === 4) {
      randChip.style.visibility = "visible";
    }
    if (nm === 5) {
      sontChip.style.visibility = "visible";
    }

    if (nm === 6) {
      loveChip.style.display = "hidden";
    }
    if (nm === 7) {
      freiChip.style.display = "none";
    }
    if (nm === 8) {
      busiChip.style.display = "hidden";
    }
    if (nm === 9) {
      randChip.style.display = "hidden";
    }
    if (nm === 10) {
      sontChip.style.display = "none";
    }
  }
handleBookedMarkedPosts(bookMarkers: string, uid: string, postId: string, title, body, timestamp, user, cardColor, tags, like, dislike, timestampMillis, likers){
  this.afs.collection("users").doc(uid)
  .collection("bookedMarkedPosts").doc(postId)
  .set({
    title : title,
    postId : postId,
    body : body,
    timestamp : timestamp,
    user: user,
    cardColor: cardColor,
    uid: uid,
    tags: tags,
    like: like,
    dislike: dislike,
    timestampMillis: timestampMillis,
    bookMarkers: bookMarkers,
    likers: likers
  })
  .then((value) => {
    this.updateBookmarksForUser(bookMarkers, postId, uid)
    this.toast(`Post: ${title}, wurde erfolgreich gespeichert!`, "success")
  })
  .catch((value) => {
    this.toast("Post konnte nicht gespeichert werden!", "danger")
  })
}
  isPostAlreadyInLikersList(likers: string): boolean {
    if (likers.includes(this.userFireUID)) {
      return true;
    } else false;
  }

  
  isPostAlreadyLiked(likers: string): string {
    if (likers.includes(this.userFireUID)) {
      return "heart";
    } else return "heart-outline";
  }

  updatePostBookmarkState(bookMarkers: string): string{
    if(bookMarkers.includes(this.userFireUID)){
      return "bookmark"
    }
    else return "bookmark-outline"
  }

  updatePostBookmarkToUnsave(bookMarkers: string, uid: string, postId: string){
    if(bookMarkers.includes(this.userFireUID)){
      let deleteFromSaveList = bookMarkers.replace(this.userFireUID, "")


      this.afs.collection("posts").doc(postId)
      .update({"bookMarkers": deleteFromSaveList})


      this.afs.collection("users").doc(uid)
    .collection("ownPosts").doc(postId)
    .update({"bookMarkers": deleteFromSaveList})
    }
  }

  updateBookmarksForUser(bookMarkers: string, postId: string, uid: string){

    let actualBookmarkers = bookMarkers
    let addUserAsBookmarker = `,${actualBookmarkers},${this.userFireUID}`;

    this.afs.collection("posts").doc(postId)
    .update({"bookMarkers": addUserAsBookmarker})

    this.afs.collection("users").doc(uid)
    .collection("ownPosts").doc(postId)
    .update({"bookMarkers": addUserAsBookmarker})

    if(bookMarkers.includes(this.userFireUID)){
      this.updatePostBookmarkToUnsave(bookMarkers, uid, postId)
    }
  }
  handleUnlikedPosts(likeCount: number, likers: string, postId: string) {
    let likeMode = "";

    if (likers.includes(this.userFireUID)) {
      likeMode = "heart";
    } else likeMode = "heart-outline";
    let currentLikers = likers.replace(this.userFireUID, "");

    if (this.segmentModel === "feed") {
      likeCount--;

      this.afs.collection("posts").doc(postId).update({ like: likeCount });
      this.afs
        .collection("posts")
        .doc(postId)
        .update({ likers: currentLikers });
        this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("ownPosts")
        .doc(postId)
        .update({ like: likeCount });
      this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("ownPosts")
        .doc(postId)
        .update({ likers: currentLikers });
    }

    if (this.segmentModel === "news") {
      likeCount--;
      this.afs.collection("posts").doc(postId).update({ like: likeCount });
      this.afs
        .collection("posts")
        .doc(postId)
        .update({ likers: currentLikers });
      this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("ownPosts")
        .doc(postId)
        .update({ like: likeCount });
      this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("ownPosts")
        .doc(postId)
        .update({ likers: currentLikers });
    }
  }

  likePost(likeCount: number, postId: string, likers: string) {
    if (this.segmentModel === "feed") {
      if (!likers.includes(this.userFireUID)) {
        likeCount++;
        let addUserAsLiker = `,${likers},${this.userFireUID}`;
        this.afs.collection("posts").doc(postId).update({ like: likeCount });
        this.afs
          .collection("posts")
          .doc(postId)
          .update({ likers: addUserAsLiker });
          this.afs
          .collection("users")
          .doc(this.userFireUID)
          .collection("ownPosts")
          .doc(postId)
          .update({ like: likeCount });
        this.afs
          .collection("users")
          .doc(this.userFireUID)
          .collection("ownPosts")
          .doc(postId)
          .update({ likers: addUserAsLiker });
      } else this.handleUnlikedPosts(likeCount, likers, postId);
    }
    if (this.segmentModel === "news") {
      if (!likers.includes(this.userFireUID)) {
        likeCount++;
        let addUserAsLiker = `,${likers},${this.userFireUID}`;
        this.afs.collection("posts").doc(postId).update({ like: likeCount });
        this.afs
          .collection("posts")
          .doc(postId)
          .update({ likers: addUserAsLiker });
        this.afs
          .collection("users")
          .doc(this.userFireUID)
          .collection("ownPosts")
          .doc(postId)
          .update({ like: likeCount });
        this.afs
          .collection("users")
          .doc(this.userFireUID)
          .collection("ownPosts")
          .doc(postId)
          .update({ likers: addUserAsLiker });
      } else this.handleUnlikedPosts(likeCount, likers, postId);
    }
  }


  tagsValidationService(tags: string): boolean {
    if (!(tags === null || tags === undefined || tags === "")) {
      this.tagsSet = Array.from(tags.split(",").slice(1));
      return true;
    } else return false;
  }

  getIconForTag(tag: string): string {
    if (tag.includes("liebe")) {
      return "heart-outline";
    }
    if (tag.includes("freizeit")) {
      return "wine";
    }

    if (tag.includes("business")) {
      return "business-outline";
    }

    if (tag.includes("random")) {
      return "flame-outline";
    }

    if (tag.includes("sonstiges")) {
      return "shuffle-outline";
    }
  }

  getColorForTag(tag: string): string {
    if (tag.includes("liebe")) {
      return "danger";
    }
    if (tag.includes("freizeit")) {
      return "success";
    }

    if (tag.includes("business")) {
      return "dark";
    }

    if (tag.includes("random")) {
      return "queen-pink";
    }

    if (tag.includes("sonstiges")) {
      return "warning";
    }
  }

  getNameForTag(tag: string): string {
    if (tag.includes("liebe")) {
      return "Liebe";
    }
    if (tag.includes("freizeit")) {
      return "Freizeit";
    }

    if (tag.includes("business")) {
      return "Business";
    }

    if (tag.includes("random")) {
      return "Random";
    }

    if (tag.includes("sonstiges")) {
      return "Sonstiges";
    }
  }

  lookForValidTags(tags: string): boolean {
    if (!(tags === null || tags === undefined || tags === "")) return true;
    else if (tags.includes("liebe")) {
      this.enableChips(1);
      this.enableChips(8);
      this.enableChips(9);
    } else if (tags.includes("freizeit")) {
      this.enableChips(2);
    } else if (tags.includes("business")) {
      this.enableChips(3);
    } else if (tags.includes("random")) {
      this.enableChips(4);
    } else if (tags.includes("sonstiges")) {
      this.enableChips(5);
    }
    if (tags === null || tags === undefined || tags === "") {
      return false;
    }
  }
}