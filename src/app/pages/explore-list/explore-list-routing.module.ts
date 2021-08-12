import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExploreListPage } from './explore-list';
const routes: Routes = [
  {
    path: '',
    component: ExploreListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExploreListPageRoutingModule {}
