import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { LazyLoadModule } from '@core/modules/lazy-loading.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ButtonComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [ButtonComponent],
})
export class ButtonModule { }
