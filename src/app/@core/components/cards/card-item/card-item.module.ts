import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardItemComponent } from './card-item.component';
import { PosterImageModule } from '@core/components/poster-image/poster-image.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CardItemComponent],
  exports: [CardItemComponent],
  imports: [
    CommonModule,
    PosterImageModule,
    TranslateModule
  ]
})
export class CardItemModule { }
