import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedModule} from '../shared/shared.module';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardsComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
   // alert('hello');
  }
/*For navigate to other page */
moveToTeacher()       { this._router.navigate(['home/teachers']);     }
moveToTeacher_add()   { this._router.navigate(['home/add_teacher']);  }
moveToCourse_add()    { this._router.navigate(['home/add_course']);   }
moveToCourses()       { this._router.navigate(['home/courses']);      }
moveToStudents()      { this._router.navigate(['home/students']);     }
moveToStudent_add()   { this._router.navigate(['home/add_student']);  }
moveToProgram_add()   { this._router.navigate(['home/add_program']);  }
moveToPrograms()      { this._router.navigate(['home/programs']);     }
moveToSmesters_add()  { this._router.navigate(['home/add_smester']);  }
moveToSmesters()      { this._router.navigate(['home/smesters']);     }
moveToRooms_add()     { this._router.navigate(['home/add_room']);     }
moveToRooms()         { this._router.navigate(['home/rooms']);        }
moveToCourse_Assign_add()    { this._router.navigate(['home/add_assign_courses']);     }
moveToCourseAssign()         { this._router.navigate(['home/assign_courses']);        }
moveTo_timetable_add()         { this._router.navigate(['home/timetable']);        }

logout(){
  if(SharedModule.logout() == 1)
  {
    localStorage.clear();
    this._router.navigate(['verify/token']);
  }
}
}
