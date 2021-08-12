import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { EditPostPage } from "./edit-post";

const routes: Routes = [
  {
    path: "",
    component: EditPostPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPostPageRoutingModule {}
