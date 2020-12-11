<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;

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

    	$projects = Project::orderBy('created_at', 'desc')->get();

    	return response()->json([
    		'success' => true,
    		'message' => $projects
    	], 200);
    }

    public function createProject(Request $request){

        Project::create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        $projects = Project::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'message' => $projects
        ], 200);
    }

    public function tasksAll(){

        $tasks = Task::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'message' => $tasks
        ], 200);
    }

    public function createTask(Request $request){

        Task::create([
            'title' => $request->title,
            'description' => $request->description
        ]);

        $tasks = Task::orderBy('created_at', 'desc')->get();

        return response()->json([
            'success' => true,
            'message' => $tasks
        ], 200);
    }
}
