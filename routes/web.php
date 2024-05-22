<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('homepage');
});

Route::get('coworker_statements/random', static function () {
    $fact = \Illuminate\Support\Facades\DB::table('coworker_statements')->inRandomOrder()->first();
    return new \Illuminate\Http\JsonResponse(['response_type' => 'in_channel', 'text' => $fact->statement]);
});
