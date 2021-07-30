import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UserData } from '../../providers/user-data';

import { UserOptions } from '../../interfaces/user-options';
import { MenuController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebaseui from 'firebaseui';
import * as defaults from '../../app.module'
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { Injectable, Type } from '@angular/core';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  styleUrls: ['./login.scss'],
})
export class LoginPage implements AfterViewInit {
  private counter = 0
  constructor(
    public userData: UserData,
    public router: Router,
    private menu: MenuController,
    private afAuth: AngularFireAuth,
    
  ) { }
  ngAfterViewInit() {
    this.menu.enable(false)
    const fUI = new firebaseui.auth.AuthUI(defaults.firebaseVAR.auth())
    fUI.start('#firebaseui-auth-container', defaults.uiConfig);
    fUI.delete
  }
  onChangeIndex(): number {
    this.counter++
    return this.counter

  }
  changeMethodIcon(): string {
    if (this.onChangeTitle() === "Login") {
      return "person-add"
    }
    else
      return "log-out"
  }
  onChangeTitle(): string {
    if (this.onChangeAuthMethod() === true) {
      return "Login"
    }
    else
      return "Registrieren"
  }

  onChangeAuthMethod(): boolean {
    if (this.onChangeIndex() % 2 === 0) {
      return true
    }
    else
      return false
  }

/*   onLogin(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.login(this.login.email);
      this.router.navigateByUrl('/app/tabs/schedule');
    }
  } */

  onSignup() {
    this.router.navigateByUrl('/signup');
  }
}
