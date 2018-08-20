import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Location} from '@angular/common';

import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import {SharedModule} from '../shared.module';

@Injectable()
export class NotLoggedInGuard implements CanActivate{
    public isloggedIn:boolean = false;
    public redirectUrl:string;
  constructor(private route: Router, private _location : Location) { }
  public canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot){
    
    if (SharedModule.login()) { 
        return false;
      } else {
        
       // window.alert("You don't have permission to view this page");
        //this._location.back(); 
        return true;
      } 
    
   // return SharedModule.login()
  }

}