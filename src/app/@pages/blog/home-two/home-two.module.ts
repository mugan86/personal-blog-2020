import { HomeTwoComponent } from './home-two.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeTwoRoutingModule } from './home-two-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [HomeTwoComponent],
  imports: [
    CommonModule,
    HomeTwoRoutingModule,
    SharedModule
  ]
})
export class HomeTwoModule { }
