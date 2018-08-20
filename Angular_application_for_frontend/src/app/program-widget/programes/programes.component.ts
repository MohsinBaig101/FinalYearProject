import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-programes',
  templateUrl: './programes.component.html',
  styleUrls: ['./programes.component.css']
})
export class ProgramesComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  InsertNewProgramme() { this._router.navigate(['ProgramAdd']); }

}
