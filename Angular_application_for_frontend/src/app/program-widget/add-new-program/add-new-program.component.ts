import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-add-new-program',
  templateUrl: './add-new-program.component.html',
  styleUrls: ['./add-new-program.component.css']
})
export class AddNewProgramComponent implements OnInit {
  public formfield = new FormGroup({
    programeName : new FormControl('',Validators.required),
    programeDescription : new FormControl('', Validators.required)
  });
  constructor() { }

  ngOnInit() {
  }

}
