<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{

    /**
     * Get the author for book.
     */
    public function author()
    {
        return $this->belongsTo('App\Author');
    }

    /**
     * Get the publishing house for book.
     */
    public function publication()
    {
        return $this->belongsTo('App\Publication');
    }

    /**
     * Get all books with their relations (author and publication house)
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function getBooks()
    {
        $books = $this->with(['author', 'publication']);
        return $books->get();
    }

    /**
     * Store book to db
     * @param $request
     * @return Book
     */
    public function storeBook($request)
    {
        $book = new Book;
        $book->title = $request->title;
        $book->author_id = $request->author_id;
        $book->publication_id = $request->publication_id;
        $book->published_at = $request->published_at;
        $book->save();
        return $book;
    }

    /**
     * Delete the book from the db
     * @param $id - book id
     */
    public function deleteBook($id)
    {
        $book = $this->find($id);
        $book->delete();
    }
}
