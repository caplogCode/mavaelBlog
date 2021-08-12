import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ExploreListPage } from './explore-list';
import { ExploreListPageRoutingModule } from './explore-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ExploreListPageRoutingModule
  ],
  declarations: [ExploreListPage],
})
export class ExploreListModule {}
