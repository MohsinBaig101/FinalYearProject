import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { CourseAssignService } from '../../shared/services/course_assign.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-assign-course-add',
  templateUrl: './new-assign-course-add.component.html',
  styleUrls: ['./new-assign-course-add.component.css']
})
export class NewAssignCourseAddComponent implements OnInit {
  public data:any;
  public response : any;
  public html_msg = "";
  public show_msg_bool = 0;
  public message_bool;
  public canload = false;
  public show_htmls;
  
  
   public new_course_assign_form_data = new FormGroup({
    user_id: new FormControl('',Validators.required),
    course_id: new FormControl('',Validators.required),
    program_id: new FormControl('',Validators.required),
    smester_id: new FormControl('',Validators.required),
    });
  constructor( private _course: CourseAssignService, private _message:MessageService) { }

  ngOnInit() {
   
    this.message_bool = 0;
    this.get_basic_data();
}
get_basic_data()
{
  this.canload = false;
  this._course.get_data().subscribe(response => {
    this.data = response.json();
    if(this.data.success)
    {
      
      this.canload = true;
    }    
    if(this.data.error)
    {
      this.show_htmls = this._message.error(this.data.error);

    }
  });
}
  /*Adding new teacher in data method call */
  add_new_course_assign_data()
  {

    //console.log(this.new_course_assign_form_data.value);return false;
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._course.course_assign_record_inseret(this.new_course_assign_form_data.value).subscribe(response => {
      this.response = response.json();
      //console.log(this.data.success);
    if(this.data.success)
    {
      this.show_msg_bool = 1;
      this.html_msg = this._message.success(this.response.success);
    }
    if(this.response.errors)
    {
      this.show_msg_bool = 1;
      this.html_msg = this._message.error(this.response.errors.email[0]);
    }
      
  });
   this.get_basic_data();
  }


  
}
