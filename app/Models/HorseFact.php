<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @property $fact
 */
class HorseFact extends Model
{
    use HasFactory;

    protected $table = 'horsefacts';
    protected $fillable = ['fact'];
    public $timestamps = false;
}
