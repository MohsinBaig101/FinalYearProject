import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CourseWidgetComponent } from './course-widget/course-widget.component';
import { NewCourseAddComponent } from './new-course-add/new-course-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    CourseWidgetComponent,
    NewCourseAddComponent
  ],
  declarations: [
    CourseWidgetComponent,
     NewCourseAddComponent
    ]
})
export class CoursesModule { }
