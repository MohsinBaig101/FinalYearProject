import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
//import { DragDropDirectiveModule} from "angular4-drag-drop";
import { FlashMessageModule } from "angular-flash-message";
import {SharedModule} from '../app/shared/shared.module';
// import { MyDatePickerModule } from 'mydatepicker';


// import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
// import { DlDateTimePickerDateModule } from 'angular-bootstrap-datetimepicker';





/* Service import here all over the project */
import { UsersService } from './shared/services/Users.service';
import { TeacherService } from './shared/services/teacher.service';
import { CourseService } from './shared/services/course.service';
import { StudentService } from './shared/services/student.service';
import { ProgramService } from './shared/services/program.service';
import { SemesterService } from './shared/services/semester.service';
import { RoomService } from './shared/services/room.service';
import { CourseAssignService } from './shared/services/course_assign.service';
import { AuthGuard } from './shared/services/AuthGuard';
import { TokenGuard } from './shared/services/TokenGuard';
import { NotLoggedInGuard } from './shared/services/NotLoggedInGuard';
import { NotTokenGuard } from './shared/services/NotTokenGuard';
import { LoginCheckGuard } from './shared/services/LoginCheckGuard';

import { TokenService } from './shared/services/token.service';
import { TimeTableService } from './shared/services/timetable.service';


/* End Service import section */

//import { } from '@angular/'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UrlRoutingModule } from './url/url-routing.module';
import { TeachersModule } from './teachers/teachers.module';
import { StudentsModule } from './students/students.module';
import { ProgramsModule } from './programs/programs.module';
import { SemestersModule } from './semesters/semesters.module';
import { RoomsModule } from './rooms/rooms.module';
import { AssignCourseModule } from './assign-courses/AssignCourse.module';
import { TimeTableModule } from './TimeTable/TimeTable.module';
import { ViewTimesModule } from './ForStudent/viewtimes.module';
import { ShowTimesModule } from './ForTeacher/showtimes.module';


import { CoursesModule } from './courses/courses.module';
import { SmesterModule } from './smester-widget/smester.module';
import { WeakModule } from './weak-widget/weak/weak.module';
import { ProgramWidgetModule } from './program-widget/program-widget.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardsComponent } from './dashboards/dashboard.component';
import { HomeComponent } from './home/home.component';
//import { StudentComponent } from './student/student.component';
import { LoginGuard  } from './shared/services/LoginGuard';
import { LoginCheckTeacherGuard  } from './shared/services/LoginCheckTeacherGuard';

import { TokenComponent } from './token-widget/token.component';

/* For drag and drop */
import { DragulaModule } from 'ng2-dragula';

/*End drag and drop */



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardsComponent,
    HomeComponent,
    TokenComponent
    //StudentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFontAwesomeModule,
    FlashMessageModule,
    SharedModule,
    // AngularDateTimePickerModule,
   // DlDateTimePickerDateModule,
    //DragDropDirectiveModule,
    ReactiveFormsModule,
    UrlRoutingModule,
    TeachersModule,
    StudentsModule,
    CoursesModule,
    SmesterModule,
    ProgramsModule,
    SemestersModule,
    WeakModule,
    RoomsModule,
    AssignCourseModule,
    ProgramWidgetModule,
    TimeTableModule,
    DragulaModule,
    ViewTimesModule,
    ShowTimesModule
  ],
  providers: [
    UsersService,
    TeacherService,
    CourseService,
    StudentService,
    ProgramService,
    SemesterService,
    RoomService,
    CourseAssignService,
    TimeTableService,
    AuthGuard,
    TokenGuard,
    NotLoggedInGuard,
    NotTokenGuard,
    LoginGuard,
    LoginCheckGuard,
    LoginCheckTeacherGuard,
    TokenService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
