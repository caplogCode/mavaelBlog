import { Component, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

import { MenuController, IonSlides } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-tutorial",
  templateUrl: "tutorial.html",
  styleUrls: ["./tutorial.scss"],
})
export class TutorialPage {
  showSkip = true;

  @ViewChild("slides", { static: true }) slides: IonSlides;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private afAuth: AngularFireAuth
  ) {}

  startApp() {
    this.router
      .navigateByUrl("/app/tabs/schedule", { replaceUrl: true })
      .then(() => this.storage.set("ion_did_tutorial", true));
    this.menu.enable(true);
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then((isEnd) => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    this.storage.get("ion_did_tutorial").then((res) => {
      if (res === true) {
        this.router.navigateByUrl("/app/tabs/schedule", { replaceUrl: true });
      }
    });

    this.menu.enable(false);
  }
  introViewer() {
    this.router.navigateByUrl("/video-intro-player");
    this.storage.set("ion_did_tutorial", false);
    this.menu.enable(false);
  }

  lookForLoggedInUser(): boolean {
    this.afAuth.currentUser.then((user) => {
      if (user !== null || user !== undefined) {
        return false;
      }
    });
    return true;
  }
}
