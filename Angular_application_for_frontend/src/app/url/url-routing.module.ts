import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { DashboardsComponent } from '../dashboards/dashboard.component';
import { TeachersWeidgetComponent } from '../teachers/teacher-widget/teachers-weidget.component';
import { NewTeacherAddComponent } from '../teachers/new-teacher-add/new-teacher-add.component';
// import { SubjectWidgetComponent } from '../subjects/subject-widget/subject-widget.component';
// import { NewsubjectAddComponent } from '../subjects/newsubject-add/newsubject-add.component';
import { SmesterWidgetComponent } from '../smester-widget/smesterC/smester-widget.component';
import { NewsmesterAddComponent } from '../smester-widget/newsmester-add/newsmester-add.component';
import { WeakdaysComponent } from '../weak-widget/weakdays/weakdays.component';
import { NewdaysAddComponent } from '../weak-widget/newdays-add/newdays-add.component';
import { ProgramesComponent } from '../program-widget/programes/programes.component';
import { AddNewProgramComponent } from '../program-widget/add-new-program/add-new-program.component';
import { CourseWidgetComponent } from '../courses/course-widget/course-widget.component';
import {NewCourseAddComponent} from '../courses/new-course-add/new-course-add.component' 
import { HomeComponent } from '../home/home.component';

import { StudentWidgetComponent } from '../students/student-widget/student-widget.component';
import { NewStudentAddComponent } from '../students/new-student-add/new-student-add.component';

import { ProgramWidgetComponent } from '../programs/program-widget/program-widget.component';
import { NewProgramAddComponent } from '../programs/new-program-add/new-program-add.component';
import { SemesterWidgetComponent } from '../semesters/semester-widget/semester-widget.component';
 import { NewSemesterAddComponent } from '../semesters/new-semester-add/new-semester-add.component';
 import { RoomWidgetComponent } from '../rooms/room-widget/room-widget.component';
 import { NewRoomAddComponent } from '../rooms/new-room-add/new-room-add.component';


import { AssignCourseWidgetComponent } from '../assign-courses/assign-course-widget/assign-course-widget.component';
import { NewAssignCourseAddComponent } from '../assign-courses/new-assign-course-add/new-assign-course-add.component';
import { TokenComponent } from '../token-widget/token.component';
import { TimeTableWidgetComponent } from '../TimeTable/timetable-widget/timetable-widget.component';
import { ViewTimeWidgetComponent } from '../ForStudent/viewtime-widget/viewtime-widget.component';
import { ShowTimeWidgetComponent } from '../ForTeacher/showtime-widget/showtime-widget.component';



import { AuthGuard  } from '../shared/services/AuthGuard';
import { TokenGuard  } from '../shared/services/TokenGuard';
import { NotLoggedInGuard  } from '../shared/services/NotLoggedInGuard';
import { NotTokenGuard  } from '../shared/services/NotTokenGuard';
import { LoginGuard  } from '../shared/services/LoginGuard';
import { LoginCheckGuard  } from '../shared/services/LoginCheckGuard';
import { LoginCheckTeacherGuard } from '../shared/services/LoginCheckTeacherGuard';



const routes: Routes = [
  {path : 'verify/token' , component : TokenComponent, canActivate: [NotTokenGuard,NotLoggedInGuard]},
  {path : 'login', component : LoginComponent, canActivate: [LoginGuard,NotLoggedInGuard]},
  {path : 'home' , component : HomeComponent, canActivate: [TokenGuard],
  children: [        
    {path : 'dashboard', component : DashboardsComponent },

  {path : 'teachers', component : TeachersWeidgetComponent },
  {path : 'add_teacher' , component : NewTeacherAddComponent},
  // {path : 'newSubject' , component:NewsubjectAddComponent},
  // {path : 'subject' , component : SubjectWidgetComponent},
  {path : 'timetable', component : TimeTableWidgetComponent },
  {path : 'courses' , component : CourseWidgetComponent},
  {path : 'add_course' , component : NewCourseAddComponent},
  {path : 'students' , component : StudentWidgetComponent},
  {path : 'add_student' , component : NewStudentAddComponent},
  {path : 'programs' , component : ProgramWidgetComponent},
  {path : 'add_program' , component : NewProgramAddComponent},
  {path : 'smesters' , component : SemesterWidgetComponent},
  {path : 'add_smester' , component : NewSemesterAddComponent},
  {path : 'rooms' , component : RoomWidgetComponent},
  {path : 'add_room' , component : NewRoomAddComponent},
  {path : 'NewsmesterAdd' , component : NewsmesterAddComponent},
  {path : 'weakdays' , component : WeakdaysComponent},
  {path : 'newDaysAdd' , component : NewdaysAddComponent},
  {path : 'assign_courses' , component : AssignCourseWidgetComponent},
  {path : 'add_assign_courses' , component : NewAssignCourseAddComponent},
  {path : 'Programes' , component : ProgramesComponent},
  {path : 'ProgramAdd' , component : AddNewProgramComponent},
  {path : 'ProgramAdd' , component : AddNewProgramComponent},

]},
/*For Teacher */
{path : 'view/timetable' , component : ViewTimeWidgetComponent,canActivate:[LoginCheckTeacherGuard]},
/*For Student */
{path : 'show/timetable' , component : ShowTimeWidgetComponent,canActivate:[LoginCheckGuard]},

{path : '', redirectTo : 'verify/token', pathMatch : 'full',canActivate: [TokenGuard]},
// {path : '', redirectTo : 'show/timetable', pathMatch : 'full',canActivate: [LoginCheckGuard]},
// {path : '', redirectTo : 'view/timetable', pathMatch : 'full',canActivate: [LoginCheckTeacherGuard]},
 {path : '**' , redirectTo : 'home/teachers'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 // providers : 
})
export class UrlRoutingModule { }
