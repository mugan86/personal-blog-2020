import { AboutComponent } from './about.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '@core/modules/shared/shared.module';
import { LoadingModule } from '@core/components/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';
import { CardProjectItemModule } from '@core/components/cards/card-project-item/card-project-item.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    TranslateModule,
    CommonModule,
    AboutRoutingModule,
    SharedModule,
    LoadingModule,
    CardProjectItemModule
  ],
  exports: [AboutComponent]
})
export class AboutModule { }
