import { TwoColComponent } from './two-col.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TwoColRoutingModule } from './two-col-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [TwoColComponent],
  imports: [
    CommonModule,
    TwoColRoutingModule,
    SharedModule
  ]
})
export class TwoColModule { }
