<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/
Route::group(['middleware' => ['auth:api']], function () {
	Route::get('projects/all', 'HomeController@projectsAll');
	Route::get('tasks/all', 'HomeController@tasksAll');

	Route::group(['middleware' => ['adminRole']], function () {
		Route::post('projects/create', 'HomeController@createProject');
		Route::post('projects/update', 'HomeController@updateProject');
		Route::post('tasks/create', 'HomeController@createTask');
	});
});