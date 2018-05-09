<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\File;

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
     * Store image book path to db
     * @param $id - book id
     * @param $imagePath
     */
    public function storeImagePath($id, $imagePath)
    {
        $book = $this->find($id);
        $book->image = $imagePath;
        $book->save();
    }

    /**
     * Delete the book from the db
     * Delete image book from storage (public/images)
     * @param $id - book id
     */
    public function deleteBook($id)
    {
        $book = $this->find($id);
        File::delete(public_path() . $book->image);
        $book->delete();
    }

    /**
     * Delete old book image if exist from public storage
     * @param $id - book id
     */
    public function deleteImage($id)
    {
        $book = $this->find($id);
        if(!$book->image) return;
        File::delete(public_path() . $book->image);
    }
}
