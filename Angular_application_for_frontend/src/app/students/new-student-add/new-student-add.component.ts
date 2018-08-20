import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { StudentService } from '../../shared/services/student.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-student-add',
  templateUrl: './new-student-add.component.html',
  styleUrls: ['./new-student-add.component.css']
})
export class NewStudentAddComponent implements OnInit {
  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
  
   public new_student_form_data = new FormGroup({
    name: new FormControl('',Validators.required),
    email : new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    });
  constructor( private _student: StudentService, private _message:MessageService) { }

  ngOnInit() {
    
  }
  /*Adding new teacher in data method call */
  add_new_student_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._student.student_record_inseret(this.new_student_form_data.value).subscribe(response => {
      this.data = response.json();
      //console.log(this.data.success);
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
