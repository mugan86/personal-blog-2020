import { ContactComponent } from './contact.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    BreadcrumbModule
  ]
})
export class ContactModule { }
