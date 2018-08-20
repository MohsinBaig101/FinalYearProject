import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersWeidgetComponent } from './teacher-widget/teachers-weidget.component';
import { NewTeacherAddComponent } from './new-teacher-add/new-teacher-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import { MessageService } from '../shared/services/message.service';
/* For drag and drop */
import { DragulaModule } from 'ng2-dragula';

/*End drag and drop */







@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DragulaModule
  ],
  declarations: [
    TeachersWeidgetComponent,
    NewTeacherAddComponent
  ],
  exports:[
    TeachersWeidgetComponent,
    NewTeacherAddComponent
  ],
  providers : [MessageService]
})
export class TeachersModule { }
