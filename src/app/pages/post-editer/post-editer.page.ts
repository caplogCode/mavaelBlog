import { LoadingController, ToastController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore/';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute} from '@angular/router';
import { Router} from '@angular/router';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post-editer',
  templateUrl: './post-editer.page.html',
  styleUrls: ['./post-editer.page.scss'],
  providers: [PostsService]
})
export class PostEditerPage implements OnInit, AfterViewInit {
  title: string;
  postId: string;
  body: string;
  timestamp: string;
  constructor(
    private route: ActivatedRoute,
    private postService: PostsService,
    private afs: AngularFirestore,
    private router: Router,
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController

  ) { }
  ngAfterViewInit() {
 
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap['postId']
    
  }
  ionViewWillEnter(){
  this.loadPost()
  }

  async loadPost(){
    const loading = await this.loadingCtrl.create({
      message: 'Bitte Warten...',
      spinner: 'crescent',
      showBackdrop: true
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

}
