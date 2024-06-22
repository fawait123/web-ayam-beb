<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::group(['prefix' => 'auth'], function () {
    Route::post("/login", [AuthController::class, 'login']);
});


Route::group(['prefix' => 'user', 'middleware' => 'auth'], function () {
    Route::get("/", [UserController::class, 'index']);
    Route::post("/", [UserController::class, 'store']);
});
