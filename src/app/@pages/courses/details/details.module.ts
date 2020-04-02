import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseDetailsRoutingModule } from './details-routing.module';
import { CourseDetailsComponent } from './details.component';


@NgModule({
  declarations: [CourseDetailsComponent],
  imports: [
    CommonModule,
    CourseDetailsRoutingModule
  ]
})
export class CourseDetailsModule { }
