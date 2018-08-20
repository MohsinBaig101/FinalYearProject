import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { ProgramService } from '../../shared/services/program.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-new-program-add',
  templateUrl: './new-program-add.component.html',
  styleUrls: ['./new-program-add.component.css']
})
export class NewProgramAddComponent implements OnInit {
  public data:any;
  public html_msg = "";
  public show_msg_bool = 0;
  
  
  
   public new_program_form_data = new FormGroup({
    program_name: new FormControl('',Validators.required),
    });
  constructor( private _program: ProgramService, private _message:MessageService) { }

  ngOnInit() {
    
  }
  /*Adding new program in data method call */
  add_new_program_data()
  {
    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this._program.program_record_inseret(this.new_program_form_data.value).subscribe(response => {
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
