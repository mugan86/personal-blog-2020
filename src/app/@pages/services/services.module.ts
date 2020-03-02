import { ServicesComponent } from './services.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
