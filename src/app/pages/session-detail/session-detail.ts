import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';
import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore/';
import { PostsService } from '../services/posts.service';
import { Router} from '@angular/router';

@Component({
  selector: 'page-session-detail',
  styleUrls: ['./session-detail.scss'],
  templateUrl: 'session-detail.html'
})
export class SessionDetailPage {
  session: any;
  isFavorite = false;
  defaultHref = '';
  title: string;
  body: string;
  timestamp: number;
  postId: string;

  constructor(
    private userProvider: UserData,
    private route: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private postService: PostsService,
    private afs: AngularFirestore,
    private router: Router,
    private toastCtrl: ToastController
  ) { }

  ionViewWillEnter() {


  }

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
    this.loadPost()
    this.postId = this.route.snapshot.paramMap.get(`${this.postId}`);
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }
  async loadPost(){
    const loading = await this.loadingCtrl.create({
      message: 'Bitte Warten...',
      spinner: 'crescent',
      showBackdrop: false
    });
    loading.present();

    this.postService.getPost(this.postId).subscribe(post => {
      this.title = post.title
      this.body = post.body
      loading.dismiss()
    })

  }
  async toast(msg, status) {
    const toast = await this.toastCtrl.create({
      message: msg,
      position: "bottom",
      color: status,
      duration: 2000,
    });
    toast.present();
  }
  async updatePost(){
    const loading = await this.loadingCtrl.create({
      message: 'Post wird aktualisiert...',
      spinner: 'crescent',
      showBackdrop: true
    });
    loading.present();

    this.afs.collection("posts").doc(this.postId).set({
      'title': this.title,
      'body': this.body
    }, {merge: true})
    .then(()=>{
      loading.dismiss()
      this.toast('Post wurde erfolgreich aktualisiert!', 'success')
      this.router.navigateByUrl('/schedule')
    })
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
