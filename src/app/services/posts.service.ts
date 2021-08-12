import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore/public_api';
import { Mavael, BlogPost } from '../models/mavael';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  mavaelCol: AngularFirestoreCollection<BlogPost>
  mavaelDoc: AngularFirestoreDocument<BlogPost>
  posts: Observable<BlogPost[]>
  post: Observable<BlogPost>
  post$: any



//Es wird auf allen Posts gemappt und asyncron gespeichert, damit man ggf. auch ohne Internet Connection in realtime weiter machen kann
//mit rxJs
  constructor(
    private afs: AngularFirestore
  ) {
    
    this.mavaelCol = this.afs.collection('posts', ref => ref.orderBy('createdAt', 'desc'))

    this.posts = this.mavaelCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a =>
          {
            const data = a.payload.doc.data() as BlogPost
            data.postId = a.payload.doc.id
            return data
          }
        )
      })
    )
   }

   getPosts(){
     return this.posts
   }

   getPost(postId){
     var posting = "post/"+postId
     this.mavaelDoc = this.afs.doc<BlogPost>(posting)
     return this.post = this.mavaelDoc.valueChanges()
   }
}
