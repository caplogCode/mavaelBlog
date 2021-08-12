import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { Mavael } from '../models/mavael';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class MavaelService {

  mavaelCol: AngularFirestoreCollection<Mavael>
  mavaelDoc: AngularFirestoreDocument<Mavael>
  users: Observable<Mavael[]>
  user: Observable<Mavael>
  user$: any



//Es wird auf allen Usern gemappt und asyncron gespeichert, damit man ggf. auch ohne Internet Connection in realtime weiter machen kann
//mit rxJs
  constructor(
    private afs: AngularFirestore
  ) {
    
    this.mavaelCol = this.afs.collection('users', ref => ref.orderBy('createdAt', 'desc'))

    this.users = this.mavaelCol.snapshotChanges().pipe(
      map(action => {
        return action.map(
          a =>
          {
            const data = a.payload.doc.data() as Mavael
            data.userID = a.payload.doc.id
            return data
          }
        )
      })
    )
   }

   getUsers(){
     return this.users
   }

   getUser(userID){
    var userListing = "user/"+userID
    this.mavaelDoc = this.afs.doc<Mavael>(userListing)
    return this.user = this.mavaelDoc.valueChanges()
  }

}
