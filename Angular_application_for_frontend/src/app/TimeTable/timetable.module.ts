import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {  TimeTableWidgetComponent } from './timetable-widget/timetable-widget.component';
import {  NewTimeTableAddComponent } from './new-timetable-add/new-timetable-add.component';
/* For drag and drop */
import { DragulaModule } from 'ng2-dragula';

/*End drag and drop */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DragulaModule
  ],
  exports : [
    TimeTableWidgetComponent,
    NewTimeTableAddComponent
  ],
  declarations: [
    TimeTableWidgetComponent,
    NewTimeTableAddComponent
    ]
})
export class TimeTableModule { }
