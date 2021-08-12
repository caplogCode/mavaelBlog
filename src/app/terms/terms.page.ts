import { Component, OnInit } from "@angular/core";
import { InAppBrowser } from "@ionic-native/in-app-browser/ngx";
import { MenuController } from "@ionic/angular";
@Component({
  selector: "app-terms",
  templateUrl: "./terms.page.html",
  styleUrls: ["./terms.page.scss"],
})
export class TermsPage implements OnInit {
  constructor(
    public inAppBrowser: InAppBrowser,
    private menu: MenuController
  ) {}

  ngOnInit() {
    this.menu.enable(false);
    this.openExternalUrl();
  }
  openExternalUrl() {
    this.inAppBrowser.create("https://www.dummies.com/terms-of-use/", "_blank");
  }
}
