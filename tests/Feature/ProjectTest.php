<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use App\Models\Project;
use Illuminate\Support\Str;

class ProjectTest extends TestCase
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

    /** @test */
    public function logged_in_users_can_see_the_projects(){
        //$this->withoutExceptionHandling();

        $user = $this->createUser();
        $this->actingAs($user);
        $response = $this->get('/user/projects')
        ->assertOk();
    }

    /** @test */
    public function only_admin_can_see_the_admin_projects(){

        $response = $this->get('/admin/projects')
        ->assertRedirect('/login');

        $user = $this->createUser();
        $this->actingAs($user);
        $response = $this->get('/admin/projects')
        ->assertStatus(404);

        $user = $this->createAdmin();
        $this->actingAs($user);
        $response = $this->get('/admin/projects')
        ->assertOk();

    }

    /** @test */
    public function only_admin_can_add_the_projects(){

        $user = $this->createAdmin();
        $this->actingAs($user);
        $response = $this->json('POST', '/api/projects/create',
        [
            'title' => 'Test1',
            'description' => 'Desc1',
            'user_id' => $user->id
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(201);

        $user = $this->createUser();
        $this->actingAs($user);
        $response = $this->json('POST', '/api/projects/create',
        [
            'title' => 'Test1',
            'description' => 'Desc1',
            'user_id' => $user->id
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(404);

        $response = $this->json('POST', '/api/projects/create',
        [
            'title' => 'Test1',
            'description' => 'Desc1'
        ]);
        $response->assertStatus(404);
    }

    /** @test */
    public function only_admin_can_update_his_projects(){

        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $this->actingAs($user);
        $response = $this->json('POST', '/api/projects/update',
        [   
            'project_id' => $project->id,
            'title' => 'project2',
            'description' => 'Desc2',
            'user_id' => $user->id
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(200);


        $response = $this->json('POST', '/api/projects/update',
        [
            'project_id' => 1,
            'title' => 'project2',
            'description' => 'Desc2',
            'user_id' => 1
        ]);
        $response->assertStatus(404);
    }

    /** @test */
    public function another_admin_cant_update_another_projects(){
        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $anotherAdmin = $this->createAdmin();
        $this->actingAs($anotherAdmin);
        $response = $this->json('POST', '/api/projects/update',
        [   
            'project_id' => $project->id,
            'title' => 'project2',
            'description' => 'Desc2',
            'user_id' => $anotherAdmin->id
        ],
        ['HTTP_Authorization' => 'Bearer '.$anotherAdmin->api_token]);
        $response->assertStatus(401);

    }

    /** @test */
    public function only_admin_can_delete_his_projects(){

        $user = $this->createAdmin();
        $project = $this->createProject($user->id);
        $this->actingAs($user);
        $response = $this->json('POST', '/api/projects/delete',
        [   
            'project_id' => $project->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(200);

    }

    /** @test */
    public function another_admin_cant_delete_another_projects(){
        $user = $this->createAdmin();
        $anotherAdmin = $this->createAdmin();
        $project = $this->createProject($user->id);
        $this->actingAs($anotherAdmin);
        $response = $this->json('POST', '/api/projects/delete',
        [   
            'project_id' => $project->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$anotherAdmin->api_token]);
        $response->assertStatus(401);
    }

    /** @test */
    public function user_cant_delete_any_project(){
        $admin = $this->createAdmin();
        $project = $this->createProject($admin->id);
        $user = $this->createUser();

        $this->actingAs($user);
        $response = $this->json('POST', '/api/projects/delete',
        [   
            'project_id' => $project->id,
        ],
        ['HTTP_Authorization' => 'Bearer '.$user->api_token]);
        $response->assertStatus(404);

    }

}
