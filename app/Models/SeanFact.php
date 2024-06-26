<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $statement
 */
class SeanFact extends Model
{
    use HasFactory;

    protected $table = 'coworker_statements';
    protected $fillable = ['statement'];
    public $timestamps = false;
}
