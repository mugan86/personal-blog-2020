import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';
import { PosterImageModule } from '@core/components/poster-image/poster-image.module';
import { PageTitleModule } from '@core/components/page-title/page-title.module';
import { CardItemModule } from '@core/components/cards/card-item/card-item.module';
import { CardProjectItemModule } from '@core/components/cards/card-project-item/card-project-item.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BreadcrumbModule,
    PosterImageModule,
    PageTitleModule,
    CardItemModule
  ],
  exports: [
    BreadcrumbModule,
    PosterImageModule,
    PageTitleModule,
    CardItemModule
  ]
})
export class SharedModule { }
