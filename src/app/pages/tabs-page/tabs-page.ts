import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
@Component({
  templateUrl: "tabs-page.html",
})
export class TabsPage {
  currentHobby: string;
  currentBeschreibung: string;
  currentUser: string;
  constructor(public router: Router, private storage: Storage) {}

  navToPost() {
    this.router.navigateByUrl("/add-post");
  }

  ionViewDidEnter() {}
  userIsLookingForAccount() {
    this.storage.set("isUser", true);
  }
}
