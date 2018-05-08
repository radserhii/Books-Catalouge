<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Author;

class AuthorController extends Controller
{
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
