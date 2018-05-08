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

    /**
     * Get all publications house from db
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getPublications()
    {
        $publications = $this->all();
        return $publications;
    }

    /**
     * Store publication house to db
     * @param $request
     * @return Publication
     */
    public function storePublication($request)
    {
        $publication = new Publication;
        $publication->name = $request->name;
        $publication->save();
        return $publication;
    }
}
