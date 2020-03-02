import { ItemComponent } from './item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemRoutingModule } from './item-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';


@NgModule({
  declarations: [ItemComponent],
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule
  ]
})
export class ItemModule { }
