import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { MenuController } from "@ionic/angular";
@Component({
  selector: "app-privacy",
  templateUrl: "./privacy.page.html",
  styleUrls: ["./privacy.page.scss"],
})
export class PrivacyPage implements OnInit {
  constructor(
    public inAppBrowser: InAppBrowser,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.menu.enable(false);
    this.openExternalUrl();
  }
  openExternalUrl() {
    this.inAppBrowser.create(
      "https://www.dummies.com/privacy-policy/",
      "_blank"
    );
  }
}
