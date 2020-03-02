import { OneColComponent } from './one-col.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneColRoutingModule } from './one-col-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';


@NgModule({
  declarations: [OneColComponent],
  imports: [
    CommonModule,
    OneColRoutingModule,
    SharedModule
  ]
})
export class OneColModule { }
