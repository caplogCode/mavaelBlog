import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TempLoadingPageRoutingModule } from './temp-loading-routing.module';

import { TempLoadingPage } from './temp-loading.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TempLoadingPageRoutingModule
  ],
  declarations: [TempLoadingPage]
})
export class TempLoadingPageModule {}
