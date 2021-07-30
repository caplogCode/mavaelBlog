import { Component, ElementRef, Inject, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform, LoadingController, ToastController } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

import { darkStyle } from './map-dark-style';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { PhotoLibrary } from '@ionic-native/photo-library/ngx';
import { Mavael } from '../../models/mavael';
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
  styleUrls: ['./map.scss']
})
export class MapPage {
  title : string
  postId : string
  body : string
  timestamp : string
 private userModel: Mavael

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private photoLibrary: PhotoLibrary,
   
  ) { }

  ngOnInit() {
  }

  takePhoto(){
    this.photoLibrary.requestAuthorization().then(() => {
      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id);          // ID of the photo
            console.log(libraryItem.photoURL);    // Cross-platform access to photo
            console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
            console.log(libraryItem.fileName);
            console.log(libraryItem.width);
            console.log(libraryItem.height);
            console.log(libraryItem.creationDate);
            console.log(libraryItem.latitude);
            console.log(libraryItem.longitude);
            console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
          });
        },
        error: err => { console.log('could not get photos'); },
        complete: () => { console.log('done getting photos'); }
      });
    })
    .catch(err => console.log('permissions weren\'t granted'));
  }
  test(){
    this.addTask()
  }
  async addTask()
  {
/*     this.title && this.body */
    if(this.title.length === 0 && this.body.length === 0){
      const loading = await this.loadingCtrl.create({
        message: 'Post wird verarbeitet...',
        spinner: 'crescent',
        showBackdrop: true
      })

      loading.present()

      const postId = this.afs.createId()

      this.afs.collection('posts').doc(postId).set({
  'postId': document,
  'title' : this.title,
  'body' : this.body,
  'timestamp' : Date.now()
})
      .then(()=> {
        loading.dismiss()
        this.toast('Beitrag wurde erfolgreich gepostet!', 'success')
        this.router.navigate(['//app/tabs/schedule'])
      })
      .catch((error) => {
        loading.dismiss()
        this.toast(error.message, 'danger')
      })
    }
  }

pushToDB( collection: string, document: string, subCollection: string, subDocument ){
this.afs.collection(collection).doc(document)
.collection(subCollection).doc(subCollection).set({
  'postId': document,
  'title' : this.title,
  'body' : this.body,
  'timestamp' : Date.now()
})
}

 async toast(msg, status){
  const toast = await this.toastr.create({
    message: msg,
    position: 'bottom',
    color: status,
    duration: 2000
  })
  toast.present()
  }
  }
