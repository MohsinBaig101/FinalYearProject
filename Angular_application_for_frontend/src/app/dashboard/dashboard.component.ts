import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public isDropdown=false;
  public isPageSetup=false;
  constructor(private _router:Router) { }

  ngOnInit() {
  }
  ShowDropdown()
  {
    
    this.isPageSetup=!this.isPageSetup;
    this.isDropdown=!this.isDropdown;
  }
  moveTohome()  { this._router.navigate(['home']);  }
  moveToTeacher()  { this._router.navigate(['Teachers']);  }
  moveTocourse()  { this._router.navigate(['Courses']);  }
  moveToSmester()  { this._router.navigate(['smester']); }
  moveToWeak()     { this._router.navigate(['weakdays']); }
  moveToProgram()     { this._router.navigate(['Programes']); }
}
