<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Publication;

class PublicationController extends Controller
{
    public function store(Request $request, Publication $publication)
    {
        $publication = $publication->storePublication($request);
        return response()->json($publication, 201);
    }
}
