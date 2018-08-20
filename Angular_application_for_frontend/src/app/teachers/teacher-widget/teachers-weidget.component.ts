import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
import * as _ from 'underscore';

import { TeacherService } from '../../shared/services/teacher.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-teachers-weidget',
  templateUrl: './teachers-weidget.component.html',
  styleUrls: ['./teachers-weidget.component.css']
})
export class TeachersWeidgetComponent implements OnInit {

  public isActive = true;
  public boolian;
  public canload = false;
  public show_html = 0;
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
  public data_detil:any;







  public insupdate = new FormGroup(
    { 
      name: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      
    });

    
  
    
    public istimeupdate = new FormGroup(
      {
        teach_entering_time : new FormControl('', Validators.required) ,
        teach_leaving_time : new FormControl('' , Validators.required) ,
        weak_day_id : new FormControl('' , Validators.required)
      });
 
  public days =['monday' , 'tuesday' , 'wednesday' , 'thursday' , 'friday'];
  constructor(private _router:Router, private _teacher: TeacherService, private _message : MessageService) { }

  ngOnInit() {
      this.message_bool = 0;
      this._teacher.get_data().subscribe(response => {
      this.data = response.json();    
      this.canload = true;
    
    });
    

    
  
  }
  
  newTeacherAdd() { this._router.navigate(['AddingTeacher']); }
  updateData(a)
  {
   }

  get_teacher_details(instructor)
  {
    this.message_bool = 0;

    this.boolian = false;
    this.isActive = false;
    this.id = instructor.id;
    console.log(this.id);
    this._teacher.get_teacher_detail(this.id).subscribe(response => {
      this.teacher_details = response.json();
      //alert(this.teacher_details.error);
      console.log(this.teacher_details);
      this.show_html = 1;
      if(this.teacher_details.error)
      {
        alert(this.teacher_details.error);
        this.isActive = true;
        return false;
      }
      this.isActive = true;
      this.boolian = true;
      
    });
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

  insert_teacher_details()
  {
    if(!_.isEmpty(this.istimeupdate.value.teach_entering_time || this.istimeupdate.value.teach_leaving_time || this.istimeupdate.value.weak_day_id ))
    {

      this.show_msg_bool = 0;
      this.html_msg = ""; 
      this._teacher.teacher_detail_record_inseret(this.istimeupdate.value,this.arr['instructor_detail_insert_id']).subscribe(response => {
        this.data = response.json();
        console.log(this.data);
      if(this.data.success)
      {
        this.show_html = 1;
        this.isActive = true;
        this.boolian = true;
  
  
        this.message_bool = 1;
        this.message = this._message.success("Information has been inserted successfully");
      }
      if(this.data.errors)
      {
        this.show_msg_bool = 1;
       // this.html_msg = this._message.error(this.data.errors.email[0]);
      }
        
    });


     
     // return false;
    }
    else{
      this.message_bool = 1;
      this.message = this._message.error("All fields are required");
    }
    


    
  }

  edit_data(instructor)
  {
    this.id = instructor.id;
   // console.log(this.id);
    this._teacher.edit_instructor(this.id).subscribe(response => {
      this.edits_data = response.json();
     //this.pre = this.edits_data.email;
      // console.log(this.edits_data);
    });
  }
  edit_teacher_detail(id)
  {
    
    this._teacher.edit_instructor_detail(id).subscribe(response => {
      this.data_detil = response.json();
     this.data_detil = this.data_detil['data'];
     console.log(this.data_detil.teach_entering_time);
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
      this._teacher.delete_instructor(this.id).subscribe(response => {
        this.data = response.json();
       
        this.canload = true;
        this.message_bool = 1;
      this.message =  this._message.success(this.data.success);
      });
      this.arr['id'] = '';
      // this._teacher.get_data().subscribe(response => {
       
      //   this.data = response.json();
      // //  console.log(this.data);
      //     this.canload = true;
      // });
     
    }
    else 
    {
      return 0;
    }
  }
  update_teacher_data(instructor)
  {
    this.message_bool = 0;

    // alert(this.insupdate.get('email').value+"input_sy_ai_value");
    // alert(this.edits_data.email+"ju aus ki actual table sy ai thi");
    // alert(this.pre+"ju pechli input fild sy ai thi");
    //alert(this.insupdate.get('naemailme').value);
   // this.insupdate.get('email').value == "";
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
     //start email
    if(this.insupdate.get('email').value == this.edits_data.email)
    {
      this.insupdate.get('email').setValue(this.edits_data.email);
    }// alert(this.pre+"=="+this.insupdate.get('email').value);
    if(this.insupdate.get('email').value == this.pre['email'])
    {
      
      this.insupdate.get('email').setValue(this.edits_data.email);
    }
    if(this.insupdate.get('email').value == "")
    {
      //alert("b");
      this.insupdate.get('email').setValue(this.edits_data.email);
    }
    
   
       this.canload = false;
       this._teacher.update_instructor(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.teacher)
        {
          this.message_bool = 1;

          this.message =this._message.success("Information has been updated successfully");
        }
      });
      this.pre['name'] = this.insupdate.get('name').value;
      this.pre['email'] = this.insupdate.get('email').value;
      // this._teacher.get_data().subscribe(response => {
      //   this.data = response.json();    
      //   this.canload = true;
      // //  console.log(this.canload);
      // });
     

  
  }
  delete_instructor(instructor)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
   // alert(instructor);
    id = instructor.id;
    this.arr['id']  = id;
    
     
  } delete_instructor_detail(id)
  {
    this.message_bool = 0;

   // this.canload = true;
 
  alert(id);
    this.arr['instructor_detail_id']  = id;
  
     
  }
  is_deleted_detail($bool)
  {
    if($bool)
    {
      
      this.canload = false;
       
      let num :any;
      num = 1;
      this.id= this.arr['instructor_detail_id'];
      this._teacher.delete_instructor_detail(this.id).subscribe(response => {
        this.teacher_details = response.json();
       
        this.canload = true;
        this.message_bool = 1;
        this.message =  this._message.success("Instructor detail has been deleted successfully.");
      });
      this.arr['id'] = '';
      
     
    }
    else 
    {
      return 0;
    }
  }
  

}

   