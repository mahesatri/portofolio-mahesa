<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PortfolioController;

// Kalau ada orang buka alamat utama (/), panggil PortfolioController
Route::get('/', [PortfolioController::class, 'index']);