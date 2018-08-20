import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { CourseService } from '../../shared/services/course.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-course-add',
  templateUrl: './new-course-add.component.html',
  styleUrls: ['./new-course-add.component.css']
})
export class NewCourseAddComponent implements OnInit {
  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
  
   public new_course_form_data = new FormGroup({
    course_name: new FormControl('',Validators.required),
    course_code: new FormControl('',Validators.required),
    });
  constructor( private _course: CourseService, private _message:MessageService) { }

  ngOnInit() {
    
  }
  /*Adding new teacher in data method call */
  add_new_teacher_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._course.course_record_inseret(this.new_course_form_data.value).subscribe(response => {
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
