import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TranslateCustomModule } from '@core/modules/translate-custom.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    TranslateCustomModule
  ],
  exports: [FooterComponent]

})
export class FooterModule { }
