import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs-page";
import { TabsPageRoutingModule } from "./tabs-page-routing.module";

import { FeedModule } from "../feed/feed.module";
import { EditPostModule } from "../edit-post/edit-post.module";
import { ExploreListModule } from "../explore-list/explore-list.module";

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FeedModule,
    EditPostModule,
    ExploreListModule,
    TabsPageRoutingModule,
  ],
  declarations: [TabsPage],
})
export class TabsModule {}
