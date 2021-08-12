import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideoIntroPlayerPage } from './video-intro-player.page';

const routes: Routes = [
  {
    path: '',
    component: VideoIntroPlayerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideoIntroPlayerPageRoutingModule {}
