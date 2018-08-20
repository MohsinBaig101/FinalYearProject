import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

 import { ProgramWidgetComponent } from './program-widget/program-widget.component';
 import { NewProgramAddComponent } from './new-program-add/new-program-add.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports : [
    ProgramWidgetComponent,
    NewProgramAddComponent
  ],
  declarations: [
    NewProgramAddComponent,
    ProgramWidgetComponent
    ]
})
export class ProgramsModule { }
