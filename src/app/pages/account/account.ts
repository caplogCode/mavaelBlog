import { OnInit } from '@angular/core';
import { AfterViewInit, Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';
import { Storage } from "@ionic/storage";
import { AngularFirestore } from "@angular/fire/firestore/";

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
  styleUrls: ['./account.scss'],
})
export class AccountPage implements AfterViewInit, OnInit {
  username: string;
  hobby: string
  beschreibung: string
  uid: string

  constructor(
    private storage: Storage,
    public alertCtrl: AlertController,
    public router: Router,
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) { }
  ngOnInit(){

  }
ionViewWillEnter(){
  this.storage.get("userIdCurrent").then((value) =>{
    this.uid = value
  })
}
  ngAfterViewInit() {
    this.getUsername();
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
          name: 'Passwort',
          placeholder: 'Passwort'
        }
      ]
    });
    await alert.present();
  }

  async changeHobby() {
    const alert = await this.alertCtrl.create({
      header: 'Hobby ändern',
      buttons: [
        'Abbrechen',
        {
          text: 'Ok',
          handler: (data: any) => {
    
         this.afs.collection("users").doc(this.uid)
         .update({"hobby": data[0]})
          }
        }
      ],
      inputs: [
        {
          value: this.hobby,
          placeholder: 'Fußball...'
        }
      ]
    });
    await alert.present();
  }

  async changeBeschreibung() {
    const alert = await this.alertCtrl.create({
      header: 'Beschreibung einfügen',
      buttons: [
        'Abbrechen',
        {
          text: 'Ok',
          handler: (data: any) => {
    
         this.afs.collection("users").doc(this.uid)
         .update({"beschreibung": data[0]})
          }
        }
      ],
      inputs: [
        {
          value: this.beschreibung,
          placeholder: 'Ich bin ...'
        }
      ]
    });
    await alert.present();
  }

  logout() {
    this.storage.clear();
    this.afAuth.signOut();
    return this.router.navigateByUrl("/login");
  }

  support() {
    this.router.navigateByUrl('/support');
  }
}