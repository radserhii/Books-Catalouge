<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Author;

class AuthorController extends Controller
{
    /**
     * Get all authors
     * @param Author $authors
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Author $authors)
    {
        $authors = $authors->getAuthors();
        return response()->json($authors, 200);
    }

    /**
     * Store author to storage
     * @param Request $request
     * @param Author $author
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Author $author)
    {
        $author = $author->storeAuthor($request);
        return response()->json($author, 201);
    }
}
