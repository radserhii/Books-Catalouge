<?php

use Illuminate\Http\Request;

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

//Route::middleware('auth:api')->get('/user', function (Request $request) {
//    return $request->user();
//});

//Books routes
Route::get('books', 'Api\BookController@index');
Route::delete('books/{id}', 'Api\BookController@destroy');

//Author route
Route::post('author', 'Api\AuthorController@store');