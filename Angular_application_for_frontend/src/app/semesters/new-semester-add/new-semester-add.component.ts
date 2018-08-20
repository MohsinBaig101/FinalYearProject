import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { SemesterService } from '../../shared/services/semester.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-semester-add',
  templateUrl: './new-semester-add.component.html',
  styleUrls: ['./new-semester-add.component.css']
})
export class NewSemesterAddComponent implements OnInit {
  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
  
   public new_semester_form_data = new FormGroup({
    semester_name: new FormControl('',Validators.required),
    semester_no: new FormControl('',Validators.required),
    });
  constructor( private _semester: SemesterService, private _message:MessageService) { }

  ngOnInit() {
    
  }
  /*Adding new semester in data method call */
  add_new_semester_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._semester.semester_record_inseret(this.new_semester_form_data.value).subscribe(response => {
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
