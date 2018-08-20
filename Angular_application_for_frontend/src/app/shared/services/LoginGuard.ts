import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class LoginGuard implements CanActivate{
    public isloggedIn:boolean = false;
    public redirectUrl:string;
  constructor(private route: Router) { }
  public canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    
    if (SharedModule.login_verify()) { 
        return true;
      } else {
        window.alert("You don't have permission to view this page"); 
        return false;
      } 
    
   // return SharedModule.login()
  }

}