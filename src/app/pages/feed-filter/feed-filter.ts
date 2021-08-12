import { Component } from "@angular/core";
import { Config, ModalController, NavParams } from "@ionic/angular";

@Component({
  selector: "page-feed-filter",
  templateUrl: "feed-filter.html",
  styleUrls: ["./feed-filter.scss"],
})
export class FeedFilterPage {
  ios: boolean;

  tracks: { name: string; icon: string; isChecked: boolean }[] = [];

  constructor(
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams
  ) {}

  ionViewWillEnter() {
    this.ios = this.config.get("mode") === `ios`;
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tracks.forEach((track) => {
      track.isChecked = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tracks
      .filter((c) => !c.isChecked)
      .map((c) => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
