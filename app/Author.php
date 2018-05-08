<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    /**
     * Get books for the author.
     */
    public function books()
    {
        return $this->hasMany('App\Book');
    }
}
