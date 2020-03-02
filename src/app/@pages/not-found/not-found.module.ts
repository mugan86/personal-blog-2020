import { NotFoundComponent } from './not-found.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';
@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule,
    SharedModule
  ]
})
export class NotFoundModule { }
