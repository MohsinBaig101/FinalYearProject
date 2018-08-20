import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class NotTokenGuard implements CanActivate{
    public isloggedIn:boolean = false;
    public redirectUrl:string;
  constructor(private route: Router) { }
  public canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    
    if (SharedModule.token_verify()) { 
        return false;
      } else {
       // window.alert("You don't have permission to view this page"); 
        return true;
      } 
    
   // return SharedModule.login()
  }

}