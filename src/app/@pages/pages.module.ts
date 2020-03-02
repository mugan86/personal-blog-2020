import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CoreModule } from '@core/components/shared/core.module';
import { OWL_DATE_TIME_LOCALE, OwlDateTimeIntl } from 'ng-pick-datetime';
import { DefaultIntl } from '@core/constants/default-intl';
import { CookieLawModule } from 'angular2-cookie-law';
import { Mugan86GoogleAnalyticsModule } from 'mugan86-ng-google-analytics';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CoreModule,
    CookieLawModule,
    TranslateModule,
    Mugan86GoogleAnalyticsModule.forRoot(
      {
        analyticsId: 'UA-57700600-14', // Add your track id
        showLog: false
      }
    ),
  ],
  exports: [
    PagesComponent,
    TranslateModule
  ],
  providers: [
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'es'},
    {provide: OwlDateTimeIntl, useClass: DefaultIntl},
  ],
})
export class PagesModule { }
