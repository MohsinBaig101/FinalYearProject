import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { StudentWidgetComponent } from './student-widget/student-widget.component';
 import { NewStudentAddComponent } from './new-student-add/new-student-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    StudentWidgetComponent,
    NewStudentAddComponent
  ],
  declarations: [
    StudentWidgetComponent,
    NewStudentAddComponent
    ]
})
export class StudentsModule { }
