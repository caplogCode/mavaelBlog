import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore/";
import { BlogPost } from "../../models/mavael";
import { PostsService } from "../services/posts.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import { LoadingController, ToastController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { MavaelService } from "../services/mavael.service";
@Component({
  selector: "page-speaker-list",
  templateUrl: "explore-list.html",
  styleUrls: ["./explore-list.scss"],
  providers: [MavaelService],
})
export class ExploreListPage{
  users: any = [];
  counter: number;
  title: string;
  body: string;
  userPost: any = [];

  constructor(
    private afs: AngularFirestore,
    private mavaelService: MavaelService,
    private storage: Storage,
    private router: Router
  ) {}

  ionViewDidEnter() {
    this.mavaelService.getUsers().subscribe((users) => {
      this.users = users;
      console.log(this.users)
      this.counter = users.length;
    });
  }

  splitLastUserPostsTitle(post: string): string {
    let newPost = post.replace(/,/g, "\n\n");
    return newPost;
  }

  splitLastUserPostsBody(post: string): string {
    let newPost = post.split(",");
    return newPost[1];
  }

  getSizeOfUsersCollection(): boolean {
    this.afs.collection("users").valueChanges();
    return true;
  }

addUserDataTempToStorage(username: string, hobby: string, beschreibung: string){
  this.storage.set("username", username)
  this.storage.set("hobby", hobby)
  this.storage.set("beschreibung", beschreibung)
  this.storage.set("isUser", false)
  this.router.navigateByUrl("/user-account")
}

  makePostToArray(lastPost: string): boolean {
    if (!(lastPost === "" || lastPost === null || lastPost === undefined)) {
      this.userPost = Array.from(lastPost.split(","));
      this.title = this.userPost[0];
      //this.body = this.userPost[1];  //kann als Erweiterung noch verwendet werden
      return true;
    } else return false;
  }
  getLastPostId(uid: any): string {
    let dataPost = "";
    this.afs
      .collection("users")
      .doc(uid)
      .get()
      .subscribe((data) => (dataPost = data.get("lastPostId")));
    return dataPost;
  }
  getLastUserPost(uid: any): string {
    let dataPost = "";
    this.afs
      .collection("users")
      .doc(uid)
      .collection("ownPosts")
      .doc(this.getLastPostId(uid))
      .get()
      .subscribe((data) => data.get("title"));

    return dataPost;
  }

  getRandomNumber(max): number {
    return Math.floor(Math.random() * max);
  }
  getAllUsers() {
    return this.counter;
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
}
