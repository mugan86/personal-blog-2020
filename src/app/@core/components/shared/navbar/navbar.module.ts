import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { TranslateCustomModule } from '@core/modules/translate-custom.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    TranslateModule,
    CommonModule,
    RouterModule,
  ],
  exports: [ NavbarComponent, TranslateModule]
})
export class NavbarModule { }
