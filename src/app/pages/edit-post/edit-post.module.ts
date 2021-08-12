import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EditPostPage } from "./edit-post";
import { EditPostPageRoutingModule } from "./edit-post-routing.module";
import { IonicModule } from "@ionic/angular";

@NgModule({
  imports: [CommonModule, IonicModule, EditPostPageRoutingModule, FormsModule],
  declarations: [EditPostPage],
})
export class EditPostModule {}
