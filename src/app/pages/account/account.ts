import { AfterViewInit, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

import { UserData } from '../../providers/user-data';


@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit {
  username: string;

  constructor(
    public alertCtrl: AlertController,
    public router: Router,
    public userData: UserData,
    private afAuth: AngularFireAuth,
  ) { }

  ngAfterViewInit() {
    this.getUsername();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

  // Present an alert with the current username populated
  // clicking OK will update the username and display it
  // clicking Cancel will close the alert and do nothing
  async changeUsername() {


    const alert = await this.alertCtrl.create({
      header: 'Vor- und Nachnamen ändern',
      buttons: [
        'Abbrechen',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.userData.setUsername(data.username);
            this.afAuth.currentUser.then((user)=>{
              user.updateProfile({
                displayName: data.username
              })}).then(() => {
                // Update successful
                this.getUsername()
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              }); 
            this.getUsername();
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  getUsername() {
    setTimeout(() => {
   this.afAuth.currentUser.then((user)=>{
    this.username = user.displayName
     })
    }, 1000);
 
      
 
  }

  async changePassword() {



    const alert = await this.alertCtrl.create({
      header: 'Passwort ändern',
      buttons: [
        'Abbrechen',
        {
          text: 'Ok',
          handler: (data: any) => {
    
            this.afAuth.currentUser.then((user)=>{
              user.updatePassword(data.username).then(() => {
                // Update successful.
                console.log("success")
              })}).catch((error) => {
                // An error ocurred
                // ...
                console.log("error"+error, data)
              });
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  logout() {
    this.userData.logout();
    this.router.navigateByUrl('/login');
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}