import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-weakdays',
  templateUrl: './weakdays.component.html',
  styleUrls: ['./weakdays.component.css']
})
export class WeakdaysComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }
  newWeakDayAdd()
  {
    this._router.navigate(['newDaysAdd']);
  }

}
