<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Project;
use App\Models\Role;
use App\Models\Task;
use Illuminate\Support\Str;

class TaskTest extends TestCase
{
    use RefreshDatabase;

    private function createAdmin(){

        $user = User::create([
            "id" => 1,
            "name" => "Mr. Admin",
            "email" => "someemail".Str::random(7)."@example.org",
            "email_verified_at" => "2020-12-13 14:09:16",
            "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            "api_token" => '12345'.Str::random(7)
        ]);
        $role = Role::create([
            'role_name' => 'admin',
            'user_id' => $user->id
        ]);

        return $user;
    }

    private function createUser(){
        $user = User::create([
            "id" => 2,
            "name" => "Mr. User",
            "email" => "someuseremail".Str::random(7)."@example.org",
            "email_verified_at" => "2020-12-13 14:09:16",
            "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            "api_token" => '123'.Str::random(7)
        ]);
        $role = Role::create([
            'role_name' => 'user',
            'user_id' => $user->id
        ]);

        return $user;
    }

    private function createProject($user_id){
        $project = Project::create([
            "title" => "Project",
            "description" => "description",
            "user_id" => $user_id
        ]);

        return $project;
    }

    private function createTask($project_id){
        $task = Task::create([
            "title" => "Task",
            "description" => "description",
            "project_id" => $project_id
        ]);

        return $task;
    }

    /** @test */
    public function logged_in_users_can_see_the_tasks(){

        $user = $this->createUser();
        $this->actingAs($user);
        $response = $this->get('/user/tasks')
        ->assertOk();
    }

    /** @test */
    public function only_admin_can_see_the_admin_tasks(){

        $response = $this->get('/admin/tasks')
        ->assertRedirect('/login');

        $user = $this->createUser();
        $this->actingAs($user);
        $response = $this->get('/admin/tasks')
        ->assertStatus(404);

        $user = $this->createAdmin();
        $this->actingAs($user);
        $response = $this->get('/admin/tasks')
        ->assertOk();

    }

    /** @test */
    public function only_admin_can_add_the_tasks(){

        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $this->actingAs($user);
        $response = $this->json('POST', '/api/tasks/create',
        [
            'title' => 'Task1',
            'description' => 'Desc1',
            'project_id' => $project->id
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(201);

    }

    /** @test */
    public function only_admin_can_update_his_task(){

        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $task = $this->createTask($project->id);
        $this->actingAs($user);
        $response = $this->json('POST', '/api/tasks/update',
        [   
            'task_id' => $task->id,
            'title' => 'task2',
            'description' => 'Desc2'
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(200);


        $response = $this->json('POST', '/api/tasks/update',
        [   
            'task_id' => $task->id,
            'title' => 'task2',
            'description' => 'Desc2'
        ]);
        $response->assertStatus(404);
    }

    /** @test */
    public function another_admin_cant_update_another_task(){
        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $task = $this->createTask($project->id);
        $anotherAdmin = $this->createAdmin();
        $this->actingAs($anotherAdmin);
        $response = $this->json('POST', '/api/tasks/update',
        [   
            'task_id' => $task->id,
            'title' => 'task2',
            'description' => 'Desc2'
        ],
        ['HTTP_Authorization' => 'Bearer '.$anotherAdmin->api_token]);
        $response->assertStatus(401);

    }

    /** @test */
    public function only_admin_can_delete_his_task(){

        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $task = $this->createTask($project->id);
        $this->actingAs($user);
        $response = $this->json('POST', '/api/tasks/delete',
        [   
            'task_id' => $task->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(200);

    }

    /** @test */
    public function another_admin_cant_delete_another_tasks(){
        $user = $this->createAdmin();
        $anotherAdmin = $this->createAdmin();
        $project = $this->createProject($user->id);
        $task = $this->createTask($project->id);
        $this->actingAs($anotherAdmin);
        $response = $this->json('POST', '/api/tasks/delete',
        [   
            'task_id' => $task->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$anotherAdmin->api_token]);
        $response->assertStatus(401);
    }

    /** @test */
    public function user_cant_delete_any_task(){
        $admin = $this->createAdmin();
        $project = $this->createProject($admin->id);
        $task = $this->createTask($project->id);
        $user = $this->createUser();

        $this->actingAs($user);
        $response = $this->json('POST', '/api/tasks/delete',
        [   
            'task_id' => $task->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(404);

    }
}
