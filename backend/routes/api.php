<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\PostController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::get('/auth/google', [GoogleController::class, 'redirect']);
Route::get('/auth/google/callback', [GoogleController::class, 'callback']);

// Feed - guest có thể xem danh sách/chi tiết
Route::get('/posts', [PostController::class, 'index']);
Route::get('/posts/{id}', [PostController::class, 'show'])->whereNumber('id');
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
});
// Feed - user và tổ chức: đăng/cập nhật/xóa 
Route::middleware('role:NGUOI_DUNG,TO_CHUC')->group(function () {
    Route::post('/posts', [PostController::class, 'store']);
    Route::get('/posts/me', [PostController::class, 'me']);
    Route::put('/posts/{id}', [PostController::class, 'update'])->whereNumber('id');
    Route::delete('/posts/{id}', [PostController::class, 'destroy'])->whereNumber('id');
});
