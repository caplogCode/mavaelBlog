import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { AlertController, ToastController } from "@ionic/angular";

@Component({
  selector: "page-support",
  templateUrl: "support.html",
  styleUrls: ["./support.scss"],
})
export class SupportPage {
  submitted = false;
  supportMessage: string;

  constructor(
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) {}

  async submit(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.supportMessage = "";
      this.submitted = false;

      const toast = await this.toastCtrl.create({
        message: "Danke für ihr Feedback.",
        duration: 3000,
      });
      await toast.present();
    }
  }
}
