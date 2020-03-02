import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import { HomeRoutingModule } from './home-routing.module';
import { CarouselModule } from '@core/components/carousel/carousel.module';
import { CardItemModule } from '@core/components/cards/card-item/card-item.module';
import { PosterImageModule } from '@core/components/poster-image/poster-image.module';
import { PublishInfoModule } from '@core/components/publish-info/publish-info.module';
import { ButtonModule } from '@core/components/button/button.module';
import { LoadingModule } from '@core/components/loading/loading.module';
import { PageTitleModule } from '@core/components/page-title/page-title.module';
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CarouselModule,
    CardItemModule,
    PageTitleModule,
    PosterImageModule,
    PublishInfoModule,
    ButtonModule,
    LoadingModule,
    InfiniteScrollModule,
  ]
})
export class HomeModule { }
