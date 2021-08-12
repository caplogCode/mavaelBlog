import { AngularFireAuth } from "@angular/fire/auth";
import { Component, OnInit, Injectable } from "@angular/core";
import { Platform, LoadingController, ToastController } from "@ionic/angular";

import { AngularFirestore } from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { PhotoLibrary } from "@ionic-native/photo-library/ngx";
import { Mavael } from "../../models/mavael";
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
  userFireUID: string = "";
  private userModel: Mavael;
  tags: string = "";

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
      this.getUID();
    }, 500);
  }

  /* IN CONSTRUCTION
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
  } */

  getRandomNumber(max): number {
    return Math.floor(Math.random() * max);
  }
  getColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  getRandomPastelleColor() {
    // Generate 20 colors
    for (var i = 20; i--; ) {
      var item = document.createElement("div");
      item.style.cssText = `
      display:inline-block; 
      padding: 2em;
      margin:5px; 
      border-radius:50%;
      background: ${this.getColor()};
    `;
      document.body.appendChild(item);
    }
  }

  lookForTag(tag: string) {
    console.log(tag);
    if (tag === "liebe") {
      this.disableChips(1);
    }
    if (tag === "freizeit") {
      this.disableChips(2);
    }
    if (tag === "business") {
      this.disableChips(3);
    }
    if (tag === "random") {
      this.disableChips(4);
    }
    if (tag === "sonstiges") {
      this.disableChips(5);
    }

    this.tags += "," + tag;
  }

  disableChips(nm: number) {
    let loveChip = document.getElementById("love-chip");
    let freiChip = document.getElementById("frei-chip");
    let busiChip = document.getElementById("busi-chip");
    let randChip = document.getElementById("rand-chip");
    let sontChip = document.getElementById("sont-chip");

    if (nm === 1) {
      loveChip.style.display = "none";
    }
    if (nm === 2) {
      freiChip.style.display = "none";
    }
    if (nm === 3) {
      busiChip.style.display = "none";
    }
    if (nm === 4) {
      randChip.style.display = "none";
    }
    if (nm === 5) {
      sontChip.style.display = "none";
    }
  }

  getCardFomatColor(rdNumber: number): string {
    switch (rdNumber) {
      case 1: {
        return "lilac";
      }
      case 2: {
        return "cameo-pink";
      }
      case 3: {
        return "pale-pink";
      }
      case 4: {
        return "lotion";
      }
      case 5: {
        return "non-photo-blue";
      }
      case 6: {
        return "pale-cyan";
      }
      case 7: {
        return "columbia-blue";
      }
      case 8: {
        return "lavender-gray";
      }
      case 9: {
        return "tea-green";
      }
      case 10: {
        return "eggshell";
      }
      case 11: {
        return "cultured";
      }
      case 12: {
        return "champagne";
      }
      case 13: {
        return "beau-blue";
      }
      case 14: {
        return "beau-blue";
      }
      case 15: {
        return "azureish-white";
      }
      case 16: {
        return "lavender-blush";
      }
      case 17: {
        return "queen-pink";
      }
    }
  }

  test() {
    this.addTask();
  }

  updateLastPost(uid: any, lastPostId: any) {
    this.afs.collection("users").doc(uid).update({ lastPostId: lastPostId });
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
      const date = new Date(unixTime * 1000);
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      const a = dd + "." + mm + "." + yyyy;
      console.log(a);

      const dateFormatted = a;
      const postId = this.afs.createId();
      const uid = (await this.afAuth.currentUser).uid;
      const username = (await this.afAuth.currentUser).displayName;
      //Die daten aus dem Post werden in die Models der Datenbank gepusht in 2 verschiedene Collections / deswegen Redundanz
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
          cardColor: this.getCardFomatColor(this.getRandomNumber(17)),
          uid: this.userFireUID,
          tags: this.tags,
          timestampMillis: Date.now(),
          like: 0,
          dislike: 0,
          likers: "",
          bookMarkers:""
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
              cardColor: this.getCardFomatColor(this.getRandomNumber(17)),
              uid: this.userFireUID,
              tags: this.tags,
              timestampMillis: Date.now(),
              like: 0,
              dislike: 0,
              likers: "",
              bookMarkers:""
            })
            .then(() => {
              this.updateLastPost(
                this.userFireUID,
                this.title + "," + this.body
              );
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
  async getAuthUsername(): Promise<string> {
    const uid = (await this.afAuth.currentUser).displayName;
    document.getElementById("userInputName").innerText = uid;
    return uid;
  }
  async getUID() {
    let userUUID = "";
    this.afAuth.currentUser.then((value) => {
      userUUID = value.uid;
      this.userFireUID = userUUID;
      console.log(this.userFireUID);
    });
  }

  pushToDB(collection: string, document: string, subCollection: string) {
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
