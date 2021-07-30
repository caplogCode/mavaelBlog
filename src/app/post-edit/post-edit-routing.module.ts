import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditPage } from './post-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PostEditPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostEditPageRoutingModule {}
