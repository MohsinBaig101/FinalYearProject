import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newdays-add',
  templateUrl: './newdays-add.component.html',
  styleUrls: ['./newdays-add.component.css']
})
export class NewdaysAddComponent implements OnInit {

  public test="dffdg";
  no=4;
  constructor() { }

  ngOnInit() {
    
  }
  Daysfield(noOfvalues)
  {
    console.log(noOfvalues);
  }

}
