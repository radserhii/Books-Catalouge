<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Publication;

class PublicationController extends Controller
{
    /**
     * Get all publications house
     * @param Publication $publications
     * @return \Illuminate\Http\JsonResponse
     */
    public function index(Publication $publications)
    {
        $publications = $publications->getPublications();
        return response()->json($publications, 200);
    }

    /**
     * Store publication house to storage
     * @param Request $request
     * @param Publication $publication
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, Publication $publication)
    {
        $publication = $publication->storePublication($request);
        return response()->json($publication, 201);
    }
}
