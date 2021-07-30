import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { AngularFirestore } from "@angular/fire/firestore/";
import { BlogPost } from "./../../models/mavael";
import { PostsService } from "../services/posts.service";
import { AngularFireAuth } from "@angular/fire/auth";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertController,
  IonList,
  IonRouterOutlet,
  LoadingController,
  ModalController,
  ToastController,
  Config,
  MenuController,
} from "@ionic/angular";

import { ScheduleFilterPage } from "../schedule-filter/schedule-filter";
import { UserData } from "../../providers/user-data";
import { SignUpModule } from "../signup/signup.module";
import { Storage } from "@ionic/storage";
import { MavaelService } from '../services/mavael.service';
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
  styleUrls: ['./speaker-list.scss'],
  providers: [MavaelService],
})
export class SpeakerListPage {
  speakers: any[] = [];
  users: any = [];
  counter: number

  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private confData: ConferenceData,
    private mavaelService: MavaelService,
  ) { }

  ionViewDidEnter() {
    /*     this.confData.getSpeakers().subscribe((speakers: any[]) => {
          this.speakers = speakers;
        }); */

    this.mavaelService.getUsers().subscribe((users) => {
      this.users = users
      this.counter = users.length
    });
  }

  test(a) {
    console.log(a)
  }

  getCardColorForLetter(username: string): string {
  console.log(username)
  if ( username[0] === 
     "A" || "a"
  || "B" || "b"
  || "C" || "c"
  || "D" || "d"
  || "E" || "e"
  || "F" || "f"
  || "G" || "g"
  || "H" || "h"
  || "I" || "i"
  || "J" || "j"
  || "K" || "k"
  || "L" || "l"
  || "M" || "m"
  || "N" || "n"
  || "O" || "o"
  || "P" || "p"
  || "Q" || "q"
  || "R" || "r"
  || "S" || "s"
  || "T" || "t"
  || "U" || "u"
  || "V" || "v"
  || "W" || "w"
  || "X" || "x"
  || "Y" || "y"
  || "Z" || "z" )
  {
   return this.getCardFomatColor(this.getRandomNumber(7))
  }
   
  }

  getRandomNumber(max): number {
    return Math.floor(Math.random() * max);
  }
  getAllUsers(){
    return this.counter
  }
  getCardFomatColor(rdNumber: number): string {
    switch (rdNumber) {
      case 1: {
        return 'success'
      }
      case 2: {
        return 'primary'
      }
      case 3: {
        return 'tertiary'
      }
      case 4: {
        return 'warning'
      }
      case 5: {
        return 'light'
      }
      case 6: {
        return 'medium'
      }
      case 7: {
        return 'secondary'
      }
    }

  }
}
