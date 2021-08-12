import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { FeedPage } from './feed';
import { FeedFilterPage } from '../feed-filter/feed-filter';
import { FeedPageRoutingModule } from './feed-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule
  ],
  declarations: [
    FeedPage,
    FeedFilterPage
  ],
  entryComponents: [
    FeedFilterPage
  ]
})
export class FeedModule { }
