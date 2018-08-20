import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { ShowTimeWidgetComponent } from './showtime-widget/showtime-widget.component';
 //import { NewStudentAddComponent } from './new-viewtime-add/new-viewtime-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ShowTimeWidgetComponent,
   // NewStudentAddComponent
  ],
  declarations: [
    ShowTimeWidgetComponent,
   // NewStudentAddComponent
    ]
})
export class ShowTimesModule { }
