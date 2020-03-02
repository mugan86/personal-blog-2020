import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalMenuComponent } from './vertical-menu.component';
import { RouterModule } from '@angular/router';
import { TranslateCustomModule } from '@core/modules/translate-custom.module';

@NgModule({
  declarations: [VerticalMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    TranslateCustomModule
  ],
  exports: [VerticalMenuComponent],
})
export class VerticalMenuModule { }
