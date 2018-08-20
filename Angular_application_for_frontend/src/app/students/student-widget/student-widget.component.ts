import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { StudentService } from '../../shared/services/student.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-student-widget',
  templateUrl: './student-widget.component.html',
  styleUrls: ['./student-widget.component.css']
})
export class StudentWidgetComponent implements OnInit {

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
      name: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl(),      
    });

    
  
    
    public istimeupdate = new FormGroup(
      {
        teach_entering_time : new FormControl('', Validators.required) ,
        teach_leaving_time : new FormControl('' , Validators.required) ,
        weak_day_id : new FormControl('' , Validators.required)
      });
   constructor(private _router:Router, private _student: StudentService, private _message : MessageService) { }

  ngOnInit() {
   
      this.message_bool = 0;
      this._student.get_data().subscribe(response => {
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
  edit_data(student)
  {
    
    //alert(student.id);
    this.id = student.id;
    this._student.edit_student(this.id).subscribe(response => {
      this.edits_data = response.json();
     //this.pre = this.edits_data.email;
       //console.log(this.edits_data[0].student_name);
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
      this._student.delete_student(this.id).subscribe(response => {
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
 
    this._student.get_data().subscribe(response => {
       
      this.data = response.json();
    //  console.log(this.data);
        this.canload = true;
    });
  }
  update_student_data(student)
  {
     
    this.message_bool = 0;
    if(this.insupdate.get('name').value == this.edits_data.name)
   {
     this.insupdate.get('name').setValue(this.edits_data.name);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('name').value == this.pre['name'])
   {
     
     this.insupdate.get('name').setValue(this.edits_data.name);
   }
   if(this.insupdate.get('name').value == "")
   {
     //alert("b");
     this.insupdate.get('name').setValue(this.edits_data.name);
   }


   /*------------For password----------------- */
   if(this.insupdate.get('password').value == this.edits_data.password)
   {
     this.insupdate.get('password').setValue(this.edits_data.password);
   }
   if(this.insupdate.get('password').value == this.pre['password'])
   {
     
     this.insupdate.get('password').setValue(this.edits_data.password);
   }
   if(this.insupdate.get('password').value == "")
   {
     //alert("b");
     this.insupdate.get('password').setValue(this.edits_data.password);
   }
   /*------------End Password----------------- */

   /*------------For Email----------------- */
   if(this.insupdate.get('email').value == this.edits_data.email)
   {
     this.insupdate.get('email').setValue(this.edits_data.email);
   }
   if(this.insupdate.get('email').value == this.pre['email'])
   {
     
     this.insupdate.get('email').setValue(this.edits_data.email);
   }
   if(this.insupdate.get('email').value == "")
   {
     //alert("b");
     this.insupdate.get('email').setValue(this.edits_data.email);
   }
   /*------------End Email----------------- */
 
   
    
   
       this.canload = false;
       
       this._student.update_student(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.students)
        {
          this.message_bool = 1;

          this.message =this._message.success("Information has been updated successfully");
        }
      });
      this.pre['name'] = this.insupdate.get('name').value;
      this.pre['password'] = this.insupdate.get('password').value;
      this.pre['email'] = this.insupdate.get('email').value;
      // this._teacher.get_data().subscribe(response => {
      //   this.data = response.json();    
      //   this.canload = true;
      // //  console.log(this.canload);
      // });
     

  
  }
  delete_student(student)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
    id = student.id;
    this.arr['id']  = id;
    
  }
  


}
