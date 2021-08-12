import { Component, OnInit } from "@angular/core";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-user-account",
  templateUrl: "./user-account.page.html",
  styleUrls: ["./user-account.page.scss"],
})
export class UserAccountPage implements OnInit {

  username: string
  hobby: string
  beschreibung: string
  constructor(private storage: Storage) {}
  ngOnInit() {
  }


  ionViewWillEnter(){
    this.storage.get("isUser").then((value) =>{

   if(value === false){
    this.storage.get("username").then((value) =>{
      this.username = value
    })
    this.storage.get("hobby").then((value) =>{
      this.hobby = value
    })
    this.storage.get("beschreibung").then((value) =>{
      this.beschreibung = value
    })
  }
  if(value === true){

    this.storage.get("userNameCurrent").then((value) =>{
      this.username = value
    })
    this.storage.get("userHobbyCurrent").then((value) =>{
      this.hobby = value
    })
    this.storage.get("userBeschreibungCurrent").then((value) =>{
      this.beschreibung = value
    })
  } 
}
    )}
}
