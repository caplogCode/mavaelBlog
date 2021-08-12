import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideoIntroPlayerPageRoutingModule } from './video-intro-player-routing.module';

import { VideoIntroPlayerPage } from './video-intro-player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideoIntroPlayerPageRoutingModule
  ],
  declarations: [VideoIntroPlayerPage]
})
export class VideoIntroPlayerPageModule {}
