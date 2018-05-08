<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    protected $fillable = ['name'];

    /**
     * Get books for the author.
     */
    public function books()
    {
        return $this->hasMany('App\Book');
    }

    /**
     * Get all authors from db
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getAuthors()
    {
        $books = $this->all();
        return $books;
    }

    /**
     * Store author to db
     * @param $request
     * @return Author
     */
    public function storeAuthor($request)
    {
        $author = new Author;
        $author->name = $request->name;
        $author->save();
        return $author;
    }
}
