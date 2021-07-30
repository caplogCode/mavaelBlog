import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { LoadingController, MenuController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  styleUrls: ['./signup.scss'],
})
export class SignupPage implements OnInit {
  signup: UserOptions = { email: '', password: '' };
  submitted = false;

  constructor(
    public router: Router,
    public userData: UserData,
    private firebaseAuthentication: FirebaseAuthentication,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    public afAuth: AngularFireAuth,
    private menu: MenuController,
  ) { }
  ngOnInit() {
    this.menu.enable(false)

  }


  /*   handleRegister(){
      if(this.isUserSuccessfullyRegistered(this.afAuth.currentUser)){
      //this.router.navigateByUrl('/tutorial')
  
    }
  
    }
  
  
  
  isUserSuccessfullyRegistered(authValue: any):boolean{
  if(authValue === "")
    return false
    else
    return true
  } */

  async onRegister(form: NgForm) {
    const loading = await this.loadingCtrl.create({
      message: 'Post wird verarbeitet...',
      spinner: 'crescent',
      showBackdrop: true
    })

    try {
      this.firebaseAuthentication.createUserWithEmailAndPassword(this.signup.email, this.signup.password)
      this.submitted = true;
      if (form.valid) {
        this.userData.signup(this.signup.email);
        this.router.navigateByUrl('/app/tabs/schedule');
        //console.log(res)
        loading.dismiss()
        this.toast("Willkommen" + this.signup.email + " " + "!", 'success')
      }
    }
    catch {
      loading.dismiss()
      this.toast("Etwas ist fehlgeschlagen! ", 'danger')
      loading.dismiss()
    }




  }
  routeToLogin() {
    this.router.navigateByUrl('./app/tabs/login')
  }

  async toast(msg, status) {
    const toast = await this.toastr.create({
      message: msg,
      position: 'bottom',
      color: status,
      duration: 2000
    })
    toast.present()
  }
  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.email);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  }
}
