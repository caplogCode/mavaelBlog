import { async } from '@angular/core/testing';
import { Injectable } from "@angular/core";
import {
  AngularFirestoreCollection,
  AngularFirestoreDocument,
  AngularFirestore,
} from "@angular/fire/firestore";
import { Mavael, BlogPost } from "../../models/mavael";
import { Observable, from } from "rxjs";
import { map } from "rxjs/operators";
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: "root",
})
export class GetLastUserPostsService {
 

  mavaelCol: AngularFirestoreCollection<BlogPost>;
  mavaelDoc: AngularFirestoreDocument<BlogPost>;
  posts: Observable<BlogPost[]>;
  post: Observable<BlogPost>;
  post$: any;
  uid: string = "";

  constructor(private afs: AngularFirestore,  private afAuth: AngularFireAuth) {

    this.mavaelCol = this.afs.collection("users").doc()
    .collection('ownPosts', ref => ref.orderBy('timestamp', 'desc'))

    this.posts = this.mavaelCol.snapshotChanges().pipe(
      map((action) => {
        return action.map((a) => {
          const data = a.payload.doc.data() as BlogPost;
          data.postId = a.payload.doc.id;
          return data;
        });
      })
    );
    }

  getPosts() {
    return this.posts;
  }

  getPost(postId) {
    var posting = "post/" + postId;
    this.mavaelDoc = this.afs.doc<BlogPost>(posting);
    return (this.post = this.mavaelDoc.valueChanges());
  }
}

