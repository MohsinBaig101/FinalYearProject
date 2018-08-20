import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { SemesterService } from '../../shared/services/semester.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-semester-widget',
  templateUrl: './semester-widget.component.html',
  styleUrls: ['./semester-widget.component.css']
})
export class SemesterWidgetComponent implements OnInit {

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
      semester_name: new FormControl('',Validators.required),
      semester_no: new FormControl('',Validators.required),    
    });

    
  
    
    
   constructor(private _router:Router, private _semester: SemesterService, private _message : MessageService) { }

  ngOnInit() {
   
      this.message_bool = 0;
      this._semester.get_data().subscribe(response => {
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



  
//used
  edit_data(semester)
  {
    
    //alert(semester.id);
    this.id = semester.id;
    this._semester.edit_semester(this.id).subscribe(response => {
      this.edits_data = response.json();
     //this.pre = this.edits_data.email;
      //  console.log(this.edits_data[0].client_id);
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
      this._semester.delete_semester(this.id).subscribe(response => {
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
 
    this._semester.get_data().subscribe(response => {
       
      this.data = response.json();
    //  console.log(this.data);
        this.canload = true;
    });
  }
  update_semester_data(semester)
  {
     
    this.message_bool = 0;
    /*--------Semester Name ---------- */
    if(this.insupdate.get('semester_name').value == this.edits_data.semester_name)
   {
     this.insupdate.get('semester_name').setValue(this.edits_data.semester_name);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('semester_name').value == this.pre['name'])
   {
     
     this.insupdate.get('semester_name').setValue(this.edits_data.semester_name);
   }
   if(this.insupdate.get('semester_name').value == "")
   {
     //alert("b");
     this.insupdate.get('semester_name').setValue(this.edits_data.semester_name);
   }
   /*---------Semester Name End ------------- */

    /*--------Semester NO ---------- */
    if(this.insupdate.get('semester_no').value == this.edits_data.semester_no)
   {
     this.insupdate.get('semester_no').setValue(this.edits_data.semester_no);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('semester_no').value == this.pre['semester_no'])
   {
     
     this.insupdate.get('semester_no').setValue(this.edits_data.semester_no);
   }
   if(this.insupdate.get('semester_no').value == "")
   {
     //alert("b");
     this.insupdate.get('semester_no').setValue(this.edits_data.semester_no);
   }
   /*---------Semester No End ------------- */



   
    
   
       this.canload = false;
       
       this._semester.update_semester(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.semesters)
        {
          this.message_bool = 1;

          this.message =this._message.success("Information has been updated successfully");
        }
      });
      this.pre['name'] = this.insupdate.get('name').value;
      this.pre['semester_no'] = this.insupdate.get('semester_no').value;
     // this.pre['email'] = this.insupdate.get('email').value;
      // this._teacher.get_data().subscribe(response => {
      //   this.data = response.json();    
      //   this.canload = true;
      // //  console.log(this.canload);
      // });
     

  
  }
  delete_semester(semester)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
    id = semester.id;
    this.arr['id']  = id;
    
  }
  


}
