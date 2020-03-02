import { FaqComponent } from './faq.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [FaqComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    BreadcrumbModule
  ]
})
export class FaqModule { }
