import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { RoomService } from '../../shared/services/room.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-room-add',
  templateUrl: './new-room-add.component.html',
  styleUrls: ['./new-room-add.component.css']
})
export class NewRoomAddComponent implements OnInit {
  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
  
   public new_room_form_data = new FormGroup({
    room_name: new FormControl('',Validators.required),
    room_type: new FormControl('',Validators.required),
    });
  constructor( private _room: RoomService, private _message:MessageService) { }

  ngOnInit() {
    
  }
  /*Adding new room in data method call */
  add_new_room_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 


    /*--------room NO ---------- */
    
   if(this.new_room_form_data.get('room_type').value == "")
   {
     //alert("b");
     this.new_room_form_data.get('room_type').setValue("1");
   }
   /*---------room No End ------------- */
    this._room.room_record_inseret(this.new_room_form_data.value).subscribe(response => {
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
