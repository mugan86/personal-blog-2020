import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { LoadingModule } from '@core/components/loading/loading.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    LoadingModule,
    LoginRoutingModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
