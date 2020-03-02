import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from '@core/modules/shared/shared.module';
import { LoadingModule } from '@core/components/loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    LoadingModule,
    SharedModule,
    TranslateModule
  ],
  exports: [ PortfolioComponent]
})
export class PortfolioModule { }
