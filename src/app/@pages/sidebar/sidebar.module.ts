import { SidebarComponent } from './sidebar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarRoutingModule } from './sidebar-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@core/modules/shared/shared.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    SidebarRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class SidebarModule { }
