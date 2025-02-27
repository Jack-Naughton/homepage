<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('homepage');
});

Route::get('coworker_statements/random', static function () {
    $fact = \Illuminate\Support\Facades\DB::table('coworker_statements')->inRandomOrder()->first();
    return new \Illuminate\Http\JsonResponse(['response_type' => 'in_channel', 'text' => $fact->statement]);
});

Route::get('horsefacts/random', static function () {
    $fact = \Illuminate\Support\Facades\DB::table('horsefacts')->inRandomOrder()->first();
    return new \Illuminate\Http\JsonResponse(['response_type' => 'in_channel', 'text' => $fact->fact]);
});

Route::get('agendabot', static function (Request $request) {
    $meeting = $request->get('text');
    $text = $meeting ? 'What is the agenda for `' . $meeting . '`?' : 'What is the agenda for this meeting?';
    return new \Illuminate\Http\JsonResponse([
        'response_type' => 'in_channel',
        'text' => $text,
    ]);
});