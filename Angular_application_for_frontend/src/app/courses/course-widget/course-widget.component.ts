import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { CourseService } from '../../shared/services/course.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-course-widget',
  templateUrl: './course-widget.component.html',
  styleUrls: ['./course-widget.component.css']
})
export class CourseWidgetComponent implements OnInit {

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







  public insupdate = new FormGroup(
    { 
      course_name: new FormControl('',Validators.required),
      course_code: new FormControl('',Validators.required),      
    });

    
  
    
    public istimeupdate = new FormGroup(
      {
        teach_entering_time : new FormControl('', Validators.required) ,
        teach_leaving_time : new FormControl('' , Validators.required) ,
        weak_day_id : new FormControl('' , Validators.required)
      });
   constructor(private _router:Router, private _course: CourseService, private _message : MessageService) { }

  ngOnInit() {
   
      this.message_bool = 0;
      this._course.get_data().subscribe(response => {
      this.data = response.json();    
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

 

instructor_detail_id_get(instructor)
{
  this.message_bool = 0;

  // this.canload = true;
   let id;
   let num :any;
   num = 1;
   id = instructor.id;
   //this id saved in teacher_availabilty table as a foorign key
   this.arr['instructor_detail_insert_id']  = id;
}

  
//used
  edit_data(course)
  {
    
    this.id = course.id;
    this._course.edit_course(this.id).subscribe(response => {
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
      
      
       this.data_getter();
       this.data_getter();
    
     
    }
    else 
    {
      return 0;
    }
  }
  data_getter()
  {
 
    this._course.get_data().subscribe(response => {
       
      this.data = response.json();
    //  console.log(this.data);
        this.canload = true;
    });
  }
  update_course_data(course)
  {
    
    this.message_bool = 0;
   if(this.insupdate.get('course_name').value == this.edits_data.course_name)
   {
     this.insupdate.get('course_name').setValue(this.edits_data.course_name);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('course_name').value == this.pre['name'])
   {
     
     this.insupdate.get('course_name').setValue(this.edits_data.course_name);
   }
   if(this.insupdate.get('course_name').value == "")
   {
     //alert("b");
     this.insupdate.get('course_name').setValue(this.edits_data.course_name);
   }
     //start email
    if(this.insupdate.get('course_code').value == this.edits_data.course_code)
    {
      this.insupdate.get('course_code').setValue(this.edits_data.course_code);
    }// alert(this.pre+"=="+this.insupdate.get('email').value);
    if(this.insupdate.get('course_code').value == this.pre['email'])
    {
      
      this.insupdate.get('course_code').setValue(this.edits_data.course_code);
    }
    if(this.insupdate.get('course_code').value == "")
    {
      //alert("b");
      this.insupdate.get('course_code').setValue(this.edits_data.course_code);
    }
    
   
       this.canload = false;
       
       this._course.update_course(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.courses)
        {
          this.message_bool = 1;

          this.message =this._message.success("Information has been updated successfully");
        }
      });
      this.pre['name'] = this.insupdate.get('course_name').value;
      this.pre['email'] = this.insupdate.get('course_code').value;
      // this._teacher.get_data().subscribe(response => {
      //   this.data = response.json();    
      //   this.canload = true;
      // //  console.log(this.canload);
      // });
     

  
  }
  delete_course(course)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
    id = course.id;
    this.arr['id']  = id;
    
  }
  


}
