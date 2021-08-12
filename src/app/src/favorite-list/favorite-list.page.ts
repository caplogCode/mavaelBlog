import { ToastController, AlertController } from "@ionic/angular";
import { Component, OnInit } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from "@angular/fire/firestore";

import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { BlogPost, Mavael } from "./../../models/mavael";
import { AngularFirestore } from "@angular/fire/firestore/";
import { AngularFireAuth } from "@angular/fire/auth";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-favorite-list",
  templateUrl: "./favorite-list.page.html",
  styleUrls: ["./favorite-list.page.scss"],
})
export class FavoriteListPage implements OnInit {
  blogCol: AngularFirestoreCollection<BlogPost>;
  blogDoc: AngularFirestoreDocument<BlogPost>;
  users: Observable<Mavael[]>;
  usersPosts: Observable<BlogPost[]>;
  user: Observable<Mavael>;
  userPost: Observable<BlogPost>;
  ownPostsList: any = [];
  userFireUID: string = "";
  tagsSet: any = [];
  constructor(
    private storage: Storage,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController
  ) {}

  getUsersOwnPosts() {
    return this.usersPosts;
  }
  ngOnInit() {
    setTimeout(() => {
      console.log(this.userFireUID);
      this.blogCol = this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("bookedMarkedPosts", (ref) =>
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
      });
    }, 500);
  }

  ionViewWillEnter() {
    this.storage.get("userIdCurrent").then((value) => {
      this.userFireUID = value;
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

  handleBookedMarkedPosts(
    bookMarkers: string,
    uid: string,
    postId: string,
    title,
    body,
    timestamp,
    user,
    cardColor,
    tags,
    like,
    dislike,
    timestampMillis
  ) {
    this.afs
      .collection("users")
      .doc(uid)
      .collection("bookedMarkedPosts")
      .doc(postId)
      .set({
        title: title,
        postId: postId,
        body: body,
        timestamp: timestamp,
        user: user,
        cardColor: cardColor,
        uid: uid,
        tags: tags,
        like: like,
        dislike: dislike,
        timestampMillis: timestampMillis,
        bookMarkers: bookMarkers,
      })
      .then((value) => {
        this.updateBookmarksForUser(bookMarkers, postId, uid);
        this.toast(`Post: ${title}, wurde erfolgreich gespeichert!`, "success");
      })
      .catch((value) => {
        this.toast("Post konnte nicht gespeichert werden!", "danger");
      });
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

  updatePostBookmarkState(bookMarkers: string): string {
    if (bookMarkers.includes(this.userFireUID)) {
      return "bookmark-outline";
    } else return "bookmark";
  }

  updatePostBookmarkToUnsave(bookMarkers: string, uid: string, postId: string) {
    if (bookMarkers.includes(this.userFireUID)) {
      let deleteFromSaveList = bookMarkers.replace(this.userFireUID, "");

      this.afs
        .collection("posts")
        .doc(postId)
        .update({ bookMarkers: deleteFromSaveList });

      this.afs
        .collection("users")
        .doc(uid)
        .collection("ownPosts")
        .doc(postId)
        .update({ bookMarkers: deleteFromSaveList });
    }
  }

  updateBookmarksForUser(bookMarkers: string, postId: string, uid: string) {
    let actualBookmarkers = bookMarkers;
    let addUserAsBookmarker = `,${actualBookmarkers},${this.userFireUID}`;

    this.afs
      .collection("posts")
      .doc(postId)
      .update({ bookMarkers: addUserAsBookmarker });

    this.afs
      .collection("users")
      .doc(uid)
      .collection("ownPosts")
      .doc(postId)
      .update({ bookMarkers: addUserAsBookmarker });

    if (bookMarkers.includes(this.userFireUID)) {
      this.updatePostBookmarkToUnsave(bookMarkers, uid, postId);
    }
  }
  handleUnlikedPosts(likeCount: number, likers: string, postId: string) {
    let likeMode = "";

    if (likers.includes(this.userFireUID)) {
      likeMode = "heart";
    } else likeMode = "heart-outline";
    let currentLikers = likers.replace(this.userFireUID, "");

    likeCount--;

    this.afs.collection("posts").doc(postId).update({ like: likeCount });
    this.afs.collection("posts").doc(postId).update({ likers: currentLikers });
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

    this.afs
      .collection("users")
      .doc(this.userFireUID)
      .collection("bookedMarkedPosts")
      .doc(postId)
      .update({ likers: currentLikers });
  }

  likePost(likeCount: number, postId: string, likers: string) {
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
      this.afs
        .collection("users")
        .doc(this.userFireUID)
        .collection("bookedMarkedPosts")
        .doc(postId)
        .update({ likers: addUserAsLiker });
    } else this.handleUnlikedPosts(likeCount, likers, postId);
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
  tagsValidationService(tags: string): boolean {
    if (!(tags === null || tags === undefined || tags === "")) {
      this.tagsSet = Array.from(tags.split(",").slice(1));
      return true;
    } else return false;
  }
  deleteBookMarkedPostFromList(uid: string, postId: string) {
    this.afs
      .collection("users")
      .doc(uid)
      .collection("bookedMarkedPosts")
      .doc(postId)
      .delete()
      .then((value) => {
        this.toast("Post erforlgreich aus Liste entfernt!", "success");
      })
      .catch((value) => {
        this.toast("Es ist ein Fehler aufgetreten", "danger");
      });
  }
}
