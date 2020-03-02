import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectItemComponent } from './card-project-item.component';
import { PosterImageModule } from '@core/components/poster-image/poster-image.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CardProjectItemComponent],
  imports: [
    CommonModule,
    PosterImageModule,
    TranslateModule
  ],
  exports: [CardProjectItemComponent]
})
export class CardProjectItemModule { }
