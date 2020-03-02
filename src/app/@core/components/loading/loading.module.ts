import { NgModule } from '@angular/core';
import { LoadingComponent } from './loading.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NgxSkeletonLoaderModule
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ]
})
export class LoadingModule { }
