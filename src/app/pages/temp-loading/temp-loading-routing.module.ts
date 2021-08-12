import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TempLoadingPage } from './temp-loading.page';

const routes: Routes = [
  {
    path: '',
    component: TempLoadingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TempLoadingPageRoutingModule {}
