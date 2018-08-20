import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { ProgramService } from '../../shared/services/program.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-program-widget',
  templateUrl: './program-widget.component.html',
  styleUrls: ['./program-widget.component.css']
})
export class ProgramWidgetComponent implements OnInit {

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
      program_name: new FormControl('',Validators.required),
          
    });

    
  
    
    
   constructor(private _router:Router, private _program: ProgramService, private _message : MessageService) { }

  ngOnInit() {
   
      this.message_bool = 0;
      this._program.get_data().subscribe(response => {
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
  edit_data(program)
  {
    
    //alert(program.id);
    this.id = program.id;
    this._program.edit_program(this.id).subscribe(response => {
      this.edits_data = response.json();
     //this.pre = this.edits_data.email;
       //console.log(this.edits_data[0].program_name);
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
      this._program.delete_program(this.id).subscribe(response => {
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
 
    this._program.get_data().subscribe(response => {
       
      this.data = response.json();
    //  console.log(this.data);
        this.canload = true;
    });
  }
  update_program_data(program)
  {
     
    this.message_bool = 0;
    if(this.insupdate.get('program_name').value == this.edits_data.program_name)
   {
     this.insupdate.get('program_name').setValue(this.edits_data.program_name);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('program_name').value == this.pre['name'])
   {
     
     this.insupdate.get('program_name').setValue(this.edits_data.program_name);
   }
   if(this.insupdate.get('program_name').value == "")
   {
     //alert("b");
     this.insupdate.get('program_name').setValue(this.edits_data.program_name);
   }



   
    
   
       this.canload = false;
       
       this._program.update_program(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.programs)
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
  delete_program(program)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
    id = program.id;
    this.arr['id']  = id;
    
  }
  


}
