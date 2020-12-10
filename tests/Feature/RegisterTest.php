<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class RegisterTest extends TestCase
{

    public $route = '/register';

    public function exampleUser(): array
    {   
        $user = [
          'name' => 'Jon Doe',
          'email' => 'user@example.com',
          'password' => '12345678'
        ];

        return $user;
    }

    public function testShowingRegistrationForm()
    {
        $response = $this->get($this->route);

        $response->assertStatus(200);
        $response->assertViewIs('dashboard.auth.register');
    }

    public function testRegistersSuccessfully(): void
    {
        $response = $this->post($this->route, $this->exampleUser());
        $response->assertRedirect('/home');
        $response->assertDatabaseHas('users', [
            'name' => $this->exampleUser()['name'],
            'email' => $this->exampleUser()['email']
        ]);

    }
}
