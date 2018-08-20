import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router} from '@angular/router';
import {Location} from '@angular/common';

import { UsersService } from '../shared/services/Users.service';
import { MessageService } from '../shared/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public data:string[];
  public html_msg = "";
  public show_msg_bool = 0;

  loginAttribute=new FormGroup({
    email : new FormControl('',Validators.required),
    Password : new FormControl('',Validators.required),
    _token : new FormControl('', Validators.required),
    isRemembered : new FormControl(),
    role : new FormControl('',Validators.required)
  });

  constructor(private user:UsersService,private _message:MessageService, private _router: Router, private location: Location) { }
  public response;
  ngOnInit() {
    // let dd = this.ad.get_data();
    // this.ad.post_data("hello");
    // console.log(dd.value);
   // this.user.get_data();
  }
  submit()
  {

    this.show_msg_bool = 0;
    this.html_msg = ""; 
    this.data=this.loginAttribute.value;
 
     this.user.login(this.data).subscribe(data => {
       this.response = data.json();
      if(this.response.success)
       {
        this.show_msg_bool = 1;
        this.html_msg = this._message.success(this.response.success);
        localStorage.setItem('fk_db_key',this.response.fk_db_key);
        localStorage.setItem('login_token',this.response.login_token);
        let fk_db_key = localStorage.getItem("fk_db_key");
        if(fk_db_key == "3")
        {
          this._router.navigate(['show/timetable']);
          //alert("student");
        }
        if(fk_db_key == "2")
        {
          this._router.navigate(['view/timetable']);
        }

        
      //  window.location.replace('http://localhost:4200/home');
       }
        if(this.response.error){
        this.show_msg_bool = 1;
        this.html_msg = this._message.error(this.response.error);
       }
       
  });
    
     
  }
  back()
  {
    this._router.navigate(['verify/token']);
  }
  
  
  

}
