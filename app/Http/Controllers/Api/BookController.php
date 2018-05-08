<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Book;

class BookController extends Controller
{
    /**
     * Display a listing of books
     * @param Book $books
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Book $books)
    {
        $books = $books->getBooks();
        return response()->json($books, 200);
    }

    /**
     * Delete the book from the storage
     * @param $id - book id
     * @param Book $book
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($id, Book $book)
    {
        $book->deleteBook($id);
        return response()->json('Successful delete', 200);
    }
}
