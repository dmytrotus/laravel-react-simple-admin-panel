<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;

class HomeController extends Controller
{

    public function adminIndex()
    {
        return view('dashboard.layouts.admin');
    }

    public function userIndex()
    {
        return view('dashboard.layouts.user');
    }

    public function projectsAll(){

    	$projects = Project::all();

    	return response()->json([
    		'success' => true,
    		'message' => $projects
    	], 200);
    }
}
