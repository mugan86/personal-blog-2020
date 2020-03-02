import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphqlModule } from '@core/graphql/graphql.module';
import { TranslateCustomModule } from '@core/modules/translate-custom.module';
import { PagesModule } from '@pages/pages.module';
import { AdminModule } from './@admin/admin.module';
import { MyErrorHandler } from './@core/services/handle-error.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    AdminModule,
    PagesModule,
    TranslateCustomModule.forRoot(['es', 'en', 'eu'], 'es'),
    GraphqlModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  exports: [TranslateCustomModule],
  providers: [{provide: ErrorHandler, useClass: MyErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
