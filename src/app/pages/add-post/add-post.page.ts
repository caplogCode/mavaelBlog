import { AngularFireAuth } from "@angular/fire/auth";
import {
  Component,
  ElementRef,
  Inject,
  ViewChild,
  AfterViewInit,
  OnInit,
  Injectable,
} from "@angular/core";
import { ConferenceData } from "../../providers/conference-data";
import { Platform, LoadingController, ToastController } from "@ionic/angular";
import { DOCUMENT } from "@angular/common";

import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { PhotoLibrary } from "@ionic-native/photo-library/ngx";
import { Mavael } from "../../models/mavael";
import { PhotoService } from "../../services/photo.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
@Component({
  selector: "app-add-post",
  templateUrl: "./add-post.page.html",
  styleUrls: ["./add-post.page.scss"],
  providers: [],
})
@Injectable({
  providedIn: "root",
})
export class AddPostPage implements OnInit {
  public photos: Photo[] = [];

  title: string;
  postId: string;
  body: string;
  timestamp: number;
  userFireUID: string = ""
  private userModel: Mavael;

  constructor(
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private photoLibrary: PhotoLibrary,
    private camera: Camera,
    private afAuth: AngularFireAuth
  ) {}

   ngOnInit() {
    setTimeout(() => {
      this.getUID()
    }, 500);
   
  }

  takePhoto() {
    this.photoLibrary
      .requestAuthorization()
      .then(() => {
        this.photoLibrary.getLibrary().subscribe({
          next: (library) => {
            library.forEach(function (libraryItem) {
              console.log(libraryItem.id); // ID of the photo
              console.log(libraryItem.photoURL); // Cross-platform access to photo
              console.log(libraryItem.thumbnailURL); // Cross-platform access to thumbnail
              console.log(libraryItem.fileName);
              console.log(libraryItem.width);
              console.log(libraryItem.height);
              console.log(libraryItem.creationDate);
              console.log(libraryItem.latitude);
              console.log(libraryItem.longitude);
              console.log(libraryItem.albumIds); // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
            });
          },
          error: (err) => {
            console.log("could not get photos");
          },
          complete: () => {
            console.log("done getting photos");
          },
        });
      })
      .catch((err) => console.log("permissions weren't granted"));
  }

  getRandomNumber(max) : number{ 
    return Math.floor(Math.random() * max);
  }

  getCardFomatColor(rdNumber: number) : string{
    switch(rdNumber){
      case 1 : {
        return 'success'
      }
      case 2 : {
        return 'primary'
      }
      case 3 : {
        return 'tertiary'
      }
      case 4 : {
        return 'warning'
      }
      case 5 : {
        return 'light'
      }
      case 6 : {
        return 'medium'
      }
      case 7 : {
        return 'secondary'
      }
    }

  }

  test() {
    this.addTask();
  }
  async addTask() {
    /*     this.title && this.body */
    if (true) {
      const loading = await this.loadingCtrl.create({
        message: "Post wird verarbeitet...",
        spinner: "crescent",
        showBackdrop: true,
      });

      loading.present();
      const unixTime = Date.now();
      const date = new Date(unixTime*1000)
      var today = new Date()
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0')
      var yyyy = today.getFullYear()
      
      const a = dd + '.' + mm + '.' + yyyy
      console.log(a)
      
      const dateFormatted = a
      const postId = this.afs.createId();
      const uid = (await this.afAuth.currentUser).uid;
      const username = (await this.afAuth.currentUser).displayName;
      this.afs
        .collection("users")
        .doc(uid)
        .collection("ownPosts")
        .doc(postId)
        .set({
          postId: postId,
          title: this.title,
          body: this.body,
          timestamp: dateFormatted,
          user: username,
          cardColor: this.getCardFomatColor(this.getRandomNumber(7)),
          uid: this.userFireUID
        })
        .then(() => {

          loading.dismiss();
          this.toast("Beitrag wurde erfolgreich gepostet!", "success");
          this.router.navigate(["//app/tabs/schedule"]);
          this.afs
          .collection("posts")
          .doc(postId)
          .set({
            postId: postId,
            title: this.title,
            body: this.body,
            timestamp: dateFormatted,
            user: username,
            cardColor: this.getCardFomatColor(this.getRandomNumber(7)),
            uid: this.userFireUID
          })
          .then(() => {
            loading.dismiss();
            //this.toast("Beitrag wurde erfolgreich gepostet!", "success");
          })
          .catch((error) => {
            loading.dismiss();
            this.toast(error.message, "danger");
          });
        })
        .catch((error) => {
          loading.dismiss();
          this.toast(error.message, "danger");
        });
    }
  }
  async getAuthUsername():Promise<string> {
    const uid = (await this.afAuth.currentUser).displayName
    document.getElementById('userInputName').innerText = uid 
    return uid
}
async getUID() {
  let userUUID = ""
 this.afAuth.currentUser.then((value)=>{
  userUUID = value.uid
this.userFireUID = userUUID
  console.log(this.userFireUID)
 })

}

  pushToDB(
    collection: string,
    document: string,
    subCollection: string,
    subDocument
  ) {
    this.afs
      .collection(collection)
      .doc(document)
      .collection(subCollection)
      .doc(subCollection)
      .set({
        postId: document,
        title: this.title,
        body: this.body,
        timestamp: Date.now(),
      });
  }
  loadSaved() {
    /*   this.storage.get('photos').then((photos) => {
    this.photos = photos || [];
  }); */
  }
  async toast(msg, status) {
    const toast = await this.toastr.create({
      message: msg,
      position: "bottom",
      color: status,
      duration: 2000,
    });
    toast.present();
  }
  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(options).then(
      (imageData) => {
        // Add new photo to gallery
        this.photos.unshift({
          data: "data:image/jpeg;base64," + imageData,
        });

        // Save all photos for later viewing
        //this.storage.set('photos', this.photos);
      },
      (err) => {
        // Handle error
        console.log("Camera issue: " + err);
      }
    );
  }
}

class Photo {
  data: any;
}
