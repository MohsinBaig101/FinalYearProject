import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import { SelectControlValueAccessor } from '@angular/forms';


import { CourseAssignService } from '../../shared/services/course_assign.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-assign-course-widget',
  templateUrl: './assign-course-widget.component.html',
  styleUrls: ['./assign-course-widget.component.css']
})
export class AssignCourseWidgetComponent implements OnInit {

  public isActive = true;
  public boolian;
  public canload = false;
  public show_html = 0;
  public show_htmls;

  public message;
  public message_bool;
  public loader_img = "";
  public teacher_details:any;
  public data:any;
  public show_msg_bool;
  public html_msg;
  public arr=[];
  public pre = [];
   public id:any;
    
  public edits_data:any;
  public edits_teacher_detail:any;


//   compareFn(c1: Country, c2: Country): boolean {
//     return c1 && c2 ? c1.id === c2.id : c1 === c2;
// }




  public edit_course_assign_form_data = new FormGroup({
    user_id: new FormControl('',Validators.required),
    course_id: new FormControl('',Validators.required),
    program_id: new FormControl('',Validators.required),
    smester_id: new FormControl('',Validators.required),
    });

    
  
    
    public istimeupdate = new FormGroup(
      {
        teach_entering_time : new FormControl('', Validators.required) ,
        teach_leaving_time : new FormControl('' , Validators.required) ,
        weak_day_id : new FormControl('' , Validators.required)
      });
   constructor(private _router:Router, private _course: CourseAssignService, private _message : MessageService) { }

  ngOnInit() {
      this.edits_data ="";
      this.message_bool = 0;
      this._course.get_data_detail().subscribe(response => {
      this.data = response.json();
      console.log(this.data.data[0][0]);   
      // alert(this.data.course[0]); 
      
      this.canload = true;
      if(this.data.error)
      {
        this.show_htmls = this._message.error(this.data.error);

      }
     // this.teacher_details.html = "b";
      
      //console.log(this.data['teacher'][0].name);
    });
    

    
  
  }
 
  newTeacherAdd() { this._router.navigate(['AddingTeacher']); }
  updateData(a)
  {
  //  this.isActive= !this.isActive;
  }

   

 

  
//used
  edit_data(id)
  {
    
   
    this._course.edit_assign_courses(id).subscribe(response => {
      this.edits_data = response.json();
    
     //this.pre = this.edits_data.email;
       //console.log(this.edits_data[0].course_name);
    });
  }
  
  
  is_deleted($bool)
  {
    if($bool)
    {
      
      this.canload = false;
       
      let num :any;
      num = 1;
      this.id= this.arr['id'];
      this._course.delete_course(this.id).subscribe(response => {
        this.edits_teacher_detail = response.json();
        this.data = this.edits_teacher_detail;
        this.message = this._message.success(this.edits_teacher_detail.success);
        this.message_bool = 1;
      });
      this.arr['id'] = '';
      
      
       
    
     
    }
    else 
    {
      return 0;
    }
  }
  
 
  
  


}
