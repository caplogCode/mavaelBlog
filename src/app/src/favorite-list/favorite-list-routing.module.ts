import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavoriteListPage } from './favorite-list.page';

const routes: Routes = [
  {
    path: '',
    component: FavoriteListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FavoriteListPageRoutingModule {}
