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

//Books routes
Route::get('books', 'Api\BookController@index');
Route::post('book', 'Api\BookController@store');
Route::delete('book/{id}', 'Api\BookController@destroy');

Route::post('book_img/{id}', 'Api\BookController@updateImage');

//Author routes
Route::get('authors', 'Api\AuthorController@index');
Route::post('author', 'Api\AuthorController@store');

//Publication house routes
Route::get('publications', 'Api\PublicationController@index');
Route::post('publication', 'Api\PublicationController@store');