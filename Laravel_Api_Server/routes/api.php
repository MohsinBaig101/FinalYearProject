<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//Route::group(['middleware' => ''], function () {
    Route::resource('/courses', 'WC_Course\CourseController');
    Route::get('meta_token',function(){
        $arr['X-CSRF-Token'] = csrf_token();


        return response()->json($arr);
    });
    
    Route::get('logout',function(Request $request){
        $request->session()->forget('login_token');
    });
    
    
    
    
    
    
    
    Route::resource('/users', 'WC_User\UserController');

Route::resource('/courses', 'WC_Course\CourseController');
Route::resource('/students', 'WC_Student\StudentController');
Route::resource('/teachers', 'WC_Teacher\TeacherController');

Route::get('/teacher_detail/{id}', [
	'as' => 'availability',
	'uses' => 'WC_Teacher\TeacherController@teacher_detail'
	]);
Route::get('/teacher_detail_show/{id}', [
	'as' => 'details',
	'uses' => 'WC_Teacher\TeacherController@teacher_detail_show'
	]);
 

Route::resource('/programs', 'WC_Programs\ProgramsController');
Route::resource('/rooms', 'WC_Room\RoomsController');
Route::resource('/semesters', 'WC_Smester\SmesterController');
Route::resource('/assign_courses', 'WC_AssignCourses\AssignCoursesController');
Route::get('assign_detail', [
//	'as' => 'details',
	'uses' => 'WC_AssignCourses\AssignCoursesController@assign_detail'
	]);
Route::get('detail', [
//	'as' => 'details',
	'uses' => 'WC_AssignCourses\AssignCoursesController@detail_assign_course'
	]);
 
Route::resource('/token', 'WC_Token\TokenController');

Route::get('token_verification/{id}',[
    'as' => 'token_verify',
    'uses' => 'WC_Smester\SmesterController@token_verification'
]);

Route::get('token_notVerified', function(){
    $arr["error"] ="Token mismatch";
    return response()->json($arr);
});
    
    
    
    
//    )];
Route::delete('teachers_delete/{id}',[
    'uses' => 'WC_Teacher\TeacherController@delete_instructor_detail'
]);
     
    
     Route::post('login',[
    'as' => 'login_routes',
    'uses' => 'WC_User\UserController@login'
]);
     
     Route::resource('/timetable', 'WC_TimeTable\TimeTableController');
     Route::get('/timetable/{program_id}/{smester_id}/show','WC_TimeTable\TimeTableController@show');
   Route::resource('/timescheduling', 'WC_TimeSchedule\TimeScheduleController');
   Route::post('/times/verifytime', 'WC_TimeSchedule\TimeScheduleController@timeschedule');
