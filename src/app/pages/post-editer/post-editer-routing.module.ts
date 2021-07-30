import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditerPage } from './post-editer.page';

const routes: Routes = [
  {
    path: '',
    component: PostEditerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostEditerPageRoutingModule {}
