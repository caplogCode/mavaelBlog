import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostEditerPageRoutingModule } from './post-editer-routing.module';

import { PostEditerPage } from './post-editer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostEditerPageRoutingModule
  ],
  declarations: [PostEditerPage]
})
export class PostEditerPageModule {}
