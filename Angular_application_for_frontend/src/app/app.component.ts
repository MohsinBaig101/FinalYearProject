import { Component } from '@angular/core';
// import * as $ from "jquery";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private _router:Router) { }

  title = 'app';
  loginUrl="http://localhost:4200/Login";
/*For navigate to other page */
  moveToTeacher()       { this._router.navigate(['teachers']);     }
  moveToTeacher_add()   { this._router.navigate(['add_teacher']);  }
  moveToCourse_add()    { this._router.navigate(['add_course']);   }
  moveToCourses()       { this._router.navigate(['courses']);      }
  moveToStudents()      { this._router.navigate(['students']);     }
  moveToStudent_add()   { this._router.navigate(['add_student']);  }
  moveToProgram_add()   { this._router.navigate(['add_program']);  }
  moveToPrograms()      { this._router.navigate(['programs']);     }
  moveToSmesters_add()  { this._router.navigate(['add_smester']);  }
  moveToSmesters()      { this._router.navigate(['smesters']);     }
  moveToRooms_add()     { this._router.navigate(['add_room']);     }
  moveToRooms()         { this._router.navigate(['rooms']);        }
  moveToCourse_Assign_add()    { this._router.navigate(['add_assign_courses']);     }
  moveToCourseAssign()         { this._router.navigate(['assign_courses']);        }

  // moveToTeacher()  { this._router.navigate(['Teachers']);  }
  // moveToTeacher()  { this._router.navigate(['Teachers']);  }
  // moveToTeacher()  { this._router.navigate(['Teachers']);  }
  // moveToTeacher()  { this._router.navigate(['Teachers']);  }
  // moveToTeacher()  { this._router.navigate(['Teachers']);  }
  // moveToTeacher()  { this._router.navigate(['Teachers']);  }



}
