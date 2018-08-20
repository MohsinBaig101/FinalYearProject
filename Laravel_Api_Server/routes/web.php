<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\WC_Models\Oauth_Client;
Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

//Route::group(['middleware' => 'auth'], function() {
Route::post('test',function (Request $request){
    return $request->all();
});

Route::get('token',function (Request $request){
   $oauth = Oauth_Client::where('secret',Input::get('client_secret'))->first();
   $data['data'] = "client_id:".\Illuminate\Support\Facades\Crypt::encrypt($oauth->id).",client_secret:".$oauth->secret;
   return response()->json($data);
});
    Route::resource('/course', 'WC_Course\CourseController');

//});