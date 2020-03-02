import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CoreModule } from '@core/components/shared/core.module';
import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';
import { PageTitleModule } from '@core/components/page-title/page-title.module';
import { VerticalMenuModule } from '@core/components/shared/vertical-menu/vertical-menu.module';
import { LoadingModule } from '@core/components/loading/loading.module';

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    CoreModule,
    LoadingModule,
    AdminRoutingModule,
    BreadcrumbModule,
    PageTitleModule,
    VerticalMenuModule
  ],
  exports: [
    AdminComponent
  ]
})
export class AdminModule { }
