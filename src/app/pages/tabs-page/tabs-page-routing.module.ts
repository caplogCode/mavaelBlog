import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs-page";
import { FeedPage } from "../feed/feed";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "schedule",
        children: [
          {
            path: "",
            component: FeedPage,
          },
          {
            path: "session/:sessionId",
            loadChildren: () =>
              import("../edit-post/edit-post.module").then(
                (m) => m.EditPostModule
              ),
          },
        ],
      },
      {
        path: "speakers",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../explore-list/explore-list.module").then(
                (m) => m.ExploreListModule
              ),
          },
          {
            path: "session/:sessionId",
            loadChildren: () =>
              import("../edit-post/edit-post.module").then(
                (m) => m.EditPostModule
              ),
          },
        ],
      },
      {
        path: "map",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../../src/favorite-list/favorite-list.module").then(
                (m) => m.FavoriteListPageModule
              ),
          },
        ],
      },
      {
        path: "account",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../user-account/user-account.module").then(
                (m) => m.UserAccountPageModule
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/app/tabs/schedule",
        pathMatch: "full",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
