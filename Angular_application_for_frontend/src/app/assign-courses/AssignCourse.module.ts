import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AssignCourseWidgetComponent } from './assign-course-widget/assign-course-widget.component';
import { NewAssignCourseAddComponent } from './new-assign-course-add/new-assign-course-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    AssignCourseWidgetComponent,
    NewAssignCourseAddComponent
  ],
  declarations: [
    AssignCourseWidgetComponent,
    NewAssignCourseAddComponent
    ]
})
export class AssignCourseModule { }
