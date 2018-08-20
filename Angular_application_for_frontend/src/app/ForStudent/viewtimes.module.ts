import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { ViewTimeWidgetComponent } from './viewtime-widget/viewtime-widget.component';
 //import { NewStudentAddComponent } from './new-viewtime-add/new-viewtime-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ViewTimeWidgetComponent,
   // NewStudentAddComponent
  ],
  declarations: [
    ViewTimeWidgetComponent,
   // NewStudentAddComponent
    ]
})
export class ViewTimesModule { }
