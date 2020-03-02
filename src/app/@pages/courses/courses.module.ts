import { CoursesComponent } from './courses.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from '@core/components/breadcrumb/breadcrumb.module';
import { CoursesRoutingModule } from './courses-routing.module';
import { LoadingModule } from '@core/components/loading/loading.module';
import { PosterImageModule } from '@core/components/poster-image/poster-image.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    BreadcrumbModule,
    LoadingModule,
    PosterImageModule,
    TranslateModule
  ],
  exports: [CoursesComponent]
})
export class CoursesModule { }
