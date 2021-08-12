import { Component, OnInit, AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { MenuController, IonSlides } from "@ionic/angular";

@Component({
  selector: "app-video-intro-player",
  templateUrl: "./video-intro-player.page.html",
  styleUrls: ["./video-intro-player.page.scss"],
})
export class VideoIntroPlayerPage implements OnInit, AfterViewInit {
  ngAfterViewInit() {
    this.menu.enable(false);
  }
  ngOnInit() {
    this.menu.enable(false);
    this.storage.set("ion_did_tutorial", false);
  }

  ionViewDidEnter() {
    this.menu.enable(false);
  }

  constructor(
    public router: Router,
    private storage: Storage,
    public menu: MenuController
  ) {}

  startApp() {
    this.router
      .navigateByUrl("/tutorial", { replaceUrl: true })
      .then(() => this.storage.set("ion_did_tutorial", false));
  }
}
