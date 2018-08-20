import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl , FormGroup, Validators} from '@angular/forms';
 

import { RoomService } from '../../shared/services/room.service';
import { MessageService } from '../../shared/services/message.service';


@Component({
  selector: 'app-room-widget',
  templateUrl: './room-widget.component.html',
  styleUrls: ['./room-widget.component.css']
})
export class RoomWidgetComponent implements OnInit {

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
      room_name : new FormControl('',Validators.required),
      room_type : new FormControl('',Validators.required),

    });

    
  
    
    
   constructor(private _router:Router, private _room: RoomService, private _message : MessageService) { }

  ngOnInit() {
   
      this.message_bool = 0;
      this._room.get_data().subscribe(response => {
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
  edit_data(room)
  {
    
    alert(room.id);
    this.id = room.id;
    this._room.edit_room(this.id).subscribe(response => {
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
      this._room.delete_room(this.id).subscribe(response => {
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
 
    this._room.get_data().subscribe(response => {
       
      this.data = response.json();
    //  console.log(this.data);
        this.canload = true;
    });
  }
  update_room_data(room)
  {
     
    this.message_bool = 0;
    /*--------room Name ---------- */
    if(this.insupdate.get('room_name').value == this.edits_data.room_name)
   {
     this.insupdate.get('room_name').setValue(this.edits_data.room_name);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('room_name').value == this.pre['name'])
   {
     
     this.insupdate.get('room_name').setValue(this.edits_data.room_name);
   }
   if(this.insupdate.get('room_name').value == "")
   {
     //alert("b");
     this.insupdate.get('room_name').setValue(this.edits_data.room_name);
   }
   /*---------room Name End ------------- */

    /*--------room NO ---------- */
    if(this.insupdate.get('room_type').value == this.edits_data.room_type)
   {
     this.insupdate.get('room_type').setValue(this.edits_data.room_type);
   }
  // alert(this.pre+"=="+this.insupdate.get('email').value);
   if(this.insupdate.get('room_type').value == this.pre['room_type'])
   {
     
     this.insupdate.get('room_type').setValue(this.edits_data.room_type);
   }
   if(this.insupdate.get('room_type').value == "")
   {
     //alert("b");
     this.insupdate.get('room_type').setValue(this.edits_data.room_type);
   }
   /*---------room No End ------------- */



   
    
   
       this.canload = false;
       
       this._room.update_room(this.insupdate.value,this.id).subscribe(response => {
        this.data = response.json();
        this.canload = true;
        if(this.data.rooms)
        {
          this.message_bool = 1;

          this.message =this._message.success("Information has been updated successfully");
        }
      });
      this.pre['name'] = this.insupdate.get('name').value;
      this.pre['room_type'] = this.insupdate.get('room_type').value;
  }
  room_type(val)
  {
   // alert("hello");
    if(this.edits_data.fk_db_key == val)
    {
      return true;
    }
    if(this.edits_data.fk_db_key == val)
    {
      return false;
    }
  }
  delete_room(room)
  {
    this.message_bool = 0;

   // this.canload = true;
    let id;
    let num :any;
    num = 1;
    id = room.id;
    this.arr['id']  = id;
    alert(this.arr['id']);
    
  }
  


}
