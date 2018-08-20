import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgramesComponent } from './programes/programes.component';
import { AddNewProgramComponent } from './add-new-program/add-new-program.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    ProgramesComponent,
    AddNewProgramComponent
  ],
  declarations: [
    ProgramesComponent,
    AddNewProgramComponent
    ]
})
export class ProgramWidgetModule { }
