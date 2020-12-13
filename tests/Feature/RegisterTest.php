<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use App\Models\Role;
use Illuminate\Support\Str;

class RegisterTest extends TestCase
{
    use RefreshDatabase;

    private function exampleUser(){
        $user = [
            "id" => 2,
            "name" => "Mr. User",
            "email" => "someuseremail@example.org",
            "email_verified_at" => "2020-12-13 14:09:16",
            "password" => "$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi",
            "api_token" => '123'.Str::random(7)
        ];
        return $user;
    }

    private $route = '/register';


    public function testShowingRegistrationForm()
    {
        $response = $this->get($this->route);

        $response->assertStatus(200);
        $response->assertViewIs('dashboard.auth.register');
    }

}
