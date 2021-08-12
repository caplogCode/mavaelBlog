import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoriteListPageRoutingModule } from './favorite-list-routing.module';

import { FavoriteListPage } from './favorite-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoriteListPageRoutingModule
  ],
  declarations: [FavoriteListPage]
})
export class FavoriteListPageModule {}
