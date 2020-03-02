import { FourColComponent } from './four-col.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FourColRoutingModule } from './four-col-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [FourColComponent],
  imports: [
    CommonModule,
    FourColRoutingModule,
    SharedModule
  ]
})
export class FourColModule { }
