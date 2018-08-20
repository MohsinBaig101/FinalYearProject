import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup} from '@angular/forms';
import { Validators } from '@angular/forms';
import { TokenService } from '../shared/services/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  public data;

  loginAttribute=new FormGroup({
    _token : new FormControl('', Validators.required),
  });

  constructor(private _token:TokenService,private _router: Router) { }
  public response;
  ngOnInit() {
    // let dd = this.ad.get_data();
    // this.ad.post_data("hello");
    // console.log(dd.value);
    this._token.get_data();
  }
  verify_token()
  {
    this.data=this.loginAttribute.value._token;
    let val = this.data.split(",");
    let client_id = val[0].split(":");
    client_id = client_id[1];
    let client_secret = val[1].split(":");
    client_secret = client_secret[1];
    let credentials ={
      'client_id'     : client_id,
      'client_secret' : client_secret,
  };

    this._token.verify_client_info(credentials).subscribe(response => {
    this.response = response.json();
    // console.log(this.response);
    if(this.response.error)
    {
      alert(this.response.error);
    }else{

      localStorage.setItem('token',this.response.secret);
      localStorage.setItem('client_id',this.response.client_id);
      alert("Token has been verified");
      window.location.replace('http://localhost:4200/home/dashboard');

      
    }
    
     
      //console.log(response.json());
  });
     //alert("hello");
     
  }
  nextpage(){
    this._router.navigate(['login']);
  }

  
  

}
