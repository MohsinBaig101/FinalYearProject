import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { SemesterWidgetComponent } from './semester-widget/semester-widget.component';
 import { NewSemesterAddComponent } from './new-semester-add/new-semester-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    SemesterWidgetComponent,
    NewSemesterAddComponent
  ],
  declarations: [
    SemesterWidgetComponent,
    NewSemesterAddComponent
    ]
})
export class SemestersModule { }
