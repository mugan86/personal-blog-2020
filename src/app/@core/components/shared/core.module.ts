import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from '@core/components/shared/navbar/navbar.module';

@NgModule({
  exports: [
    FooterModule,
    NavbarModule
  ],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ]
})
export class CoreModule { }
