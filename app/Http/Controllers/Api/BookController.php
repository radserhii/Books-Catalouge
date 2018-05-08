<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Book;

class BookController extends Controller
{
    /**
     * Display a listing of books
     * @param Book $book
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Book $book)
    {
        $books = $book->getBooks();
        return response()->json($books, 200);
    }

    /**
     * Store book to storage
     * @param Request $request
     * @param Book $book
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Book $book)
    {
        $book = $book->storeBook($request);
        return response()->json($book, 201);
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
