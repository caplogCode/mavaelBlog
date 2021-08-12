import { AfterViewInit, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MenuController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import * as firebaseui from "firebaseui";
import * as defaults from "../../app.module";
import { Storage } from "@ionic/storage";

@Component({
  selector: "page-login",
  templateUrl: "login.html",
  styleUrls: ["./login.scss"],
})
export class LoginPage implements AfterViewInit, OnInit {
  ngOnInit() {
    let user = this.afAuth.currentUser;
    setTimeout(() => {
      if (user === null || user === undefined) {
        this.router.navigateByUrl("/temp-loading");
      }
    }, 1000);

    this.menu.enable(false);
    this.userOpensAppForTheFirstTime();
  }
  private counter = 0;
  constructor(
    public router: Router,
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    private storage: Storage
  ) {}
  ngAfterViewInit() {
    this.menu.enable(false);
    const fUI = new firebaseui.auth.AuthUI(defaults.firebaseVAR.auth());
    fUI.start("#firebaseui-auth-container", defaults.uiConfig);
    fUI.delete;
  }
  onChangeIndex(): number {
    this.counter++;
    return this.counter;
  }
  changeMethodIcon(): string {
    if (this.onChangeTitle() === "Login") {
      return "person-add";
    } else return "log-out";
  }
  onChangeTitle(): string {
    if (this.onChangeAuthMethod() === true) {
      return "Login";
    } else return "Registrieren";
  }

  onChangeAuthMethod(): boolean {
    if (this.onChangeIndex() % 2 === 0) {
      return true;
    } else return false;
  }

  userOpensAppForTheFirstTime() {
    this.storage.get("firstTimeAuth").then((valueFirst) => {
      this.storage.get("isAuth").then((value) => {
        if (!value && valueFirst == false) {
          this.storage.set("firstTimeAuth", true);
        }
      });
    });
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
