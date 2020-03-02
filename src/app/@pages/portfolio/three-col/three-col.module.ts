import { ThreeColComponent } from './three-col.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThreeColRoutingModule } from './three-col-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [ThreeColComponent],
  imports: [
    CommonModule,
    ThreeColRoutingModule,
    SharedModule
  ]
})
export class ThreeColModule { }
