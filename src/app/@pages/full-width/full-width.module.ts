import { FullWidthComponent } from './full-width.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullWidthRoutingModule } from './full-width-routing.module';
import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [FullWidthComponent],
  imports: [
    CommonModule,
    FullWidthRoutingModule,
    BreadcrumbModule
  ]
})
export class FullWidthModule { }
