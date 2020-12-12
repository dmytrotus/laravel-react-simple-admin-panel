<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use App\Http\Resources\TaskResource;
use App\Http\Resources\ProjectResource;

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

    	return ProjectResource::collection($projects);
    }

    public function createProject(Request $request){

        $token = $request->bearerToken();
        $user = User::where('api_token', $token)->firstOrFail();

        Project::create([
            'title' => $request->title,
            'description' => $request->description,
            'user_id' => $user->id,
        ]);

        $projects = Project::orderBy('created_at', 'desc')->get();

        return ProjectResource::collection($projects);
    }

    public function updateProject(Request $request){

        $token = $request->bearerToken();
        $user = User::where('api_token', $token)->firstOrFail();

        $project = Project::find($request->project_id);
        if($project->user_id != $user->id){
            return response()->json([
                'data' => 'Nie możesz edytować nie swój projekt'
            ], 401);
        };

        $project->title = $request->title;
        $project->description = $request->description;
        $project->save();

        $projects = Project::orderBy('created_at', 'desc')->get();

        return ProjectResource::collection($projects);
    }

    public function deleteProject(Request $request){
        Project::find($request->project_id)->delete();
        Task::where('project_id', $request->project_id)->delete();
        $projects = Project::orderBy('created_at', 'desc')->get();
        return ProjectResource::collection($projects);
    }

    public function tasksAll(){

        $tasks = Task::orderBy('created_at', 'desc')->get();
        return TaskResource::collection($tasks);

    }

    public function createTask(Request $request){

        Task::create([
            'title' => $request->title,
            'description' => $request->description,
            'project_id' => $request->project_id
        ]);

        $tasks = Task::orderBy('created_at', 'desc')->get();

        return TaskResource::collection($tasks);
    }
}
