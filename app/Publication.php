<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    /**
     * Get books for the publishing house.
     */
    public function books()
    {
        return $this->hasMany('App\Book');
    }
}
