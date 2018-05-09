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

    /**
     * Delete old image if exist, upload image to public storage and save image path to db
     * @param $id
     * @param Request $request
     * @param Book $book
     * @return \Illuminate\Http\JsonResponse
     */
    public function uploadImage($id, Request $request, Book $book)
    {
        $this->validate($request, [
            'image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:10000',
        ]);

        $book->deleteImage($id);

        $imagePath = $this->saveImage($request);
        $book->storeImagePath($id, $imagePath);
        return response()->json('Image saved successful', 200);
    }

    /**
     * Save book image file to storage
     * @param $request
     * @return string - path stored images into public
     */
    private function saveImage($request)
    {
        $image = $request->file('image');
        $imageName = $image->getClientOriginalName();
        $destinationPath = public_path('/images');
        $image->move($destinationPath, $imageName);
        return '/images/' . $imageName;
    }
}
