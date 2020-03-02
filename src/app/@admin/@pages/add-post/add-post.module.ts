import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPostRoutingModule } from './add-post-routing.module';
import { AddPostComponent } from './add-post.component';
import { EditorModule } from '@core/components/editor/editor.module';

@NgModule({
  declarations: [AddPostComponent],
  imports: [
    CommonModule,
    AddPostRoutingModule,
    EditorModule
  ]
})
export class AddPostModule { }
