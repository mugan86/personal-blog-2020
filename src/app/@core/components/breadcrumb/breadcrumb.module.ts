import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ]
})
export class BreadcrumbModule { }
