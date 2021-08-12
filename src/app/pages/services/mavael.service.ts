import { BlogPost } from "./../../models/mavael";
import { Injectable, OnInit } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from "@angular/fire/firestore";
import { Mavael } from "../../models/mavael";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable({
  providedIn: "root",
})
export class MavaelService implements OnInit {
  afAuth: AngularFireAuth;
  mavaelCol: AngularFirestoreCollection<Mavael>;
  mavaelDoc: AngularFirestoreDocument<Mavael>;
  blogCol: AngularFirestoreCollection<BlogPost>;
  blogDoc: AngularFirestoreDocument<BlogPost>;
  users: Observable<Mavael[]>;
  usersPosts: Observable<BlogPost[]>;
  user: Observable<Mavael>;
  userPost: Observable<BlogPost>;
  user$: any;
  uid: string;

  constructor(private afs: AngularFirestore) {
    this.mavaelCol = this.afs.collection("users", (ref) =>
      ref.orderBy("createdAt", "desc")
    );
    this.blogCol = this.afs
      .collection("users")
      .doc(this.uid)
      .collection("ownPosts", (ref) => ref.orderBy("timestampMillis", "desc"));

    this.users = this.mavaelCol.snapshotChanges().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as Mavael;
          data.userID = a.payload.doc.id;
          return data;
        });
      })
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
  }
  async ngOnInit() {
    this.uid = (await this.afAuth.currentUser).uid;
  }

  getUsers() {
    return this.users;
  }

  getUser(userID) {
    var userListing = "users/" + userID;
    this.mavaelDoc = this.afs.doc<Mavael>(userListing);
    return (this.user = this.mavaelDoc.valueChanges());
  }
}
