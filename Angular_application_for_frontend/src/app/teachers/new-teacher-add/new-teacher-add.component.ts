import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { TeacherService } from '../../shared/services/teacher.service';
import { MessageService } from '../../shared/services/message.service';
// import { DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-new-teacher-add',
  templateUrl: './new-teacher-add.component.html',
  styleUrls: ['./new-teacher-add.component.css']
})
export class NewTeacherAddComponent implements OnInit {

  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
   new_teacher_form_data = new FormGroup({
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  //  fk_db_key: new FormControl()
   // btn_add_instructor : new FormControl('',Validators.required)
    // teacherEntringTime: new FormControl('',Validators.required),
    // teacherleavingTime:new FormControl('',Validators.required),
    // dayName: new FormControl('',Validators.required)
  });
  constructor( private _teacher: TeacherService, private _message:MessageService) {
    // dragulaService.setOptions('bag-task1', {
    //   copy: true
    // });
   }

  ngOnInit() {
    
  }
  /*Adding new teacher in data method call */
  add_new_teacher_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._teacher.teacher_record_inseret(this.new_teacher_form_data.value).subscribe(response => {
      this.data = response.json();
      console.log(this.data.success);
    if(this.data.success)
    {
      this.show_msg_bool = 1;
      this.html_msg = this._message.success(this.data.success);
    }
    if(this.data.errors)
    {
      this.show_msg_bool = 1;
      this.html_msg = this._message.error(this.data.errors.email[0]);
    }
      
  });
   
  }

}
