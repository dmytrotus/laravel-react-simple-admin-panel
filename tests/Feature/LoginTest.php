<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{
    public $route = '/login';

    public function testShowingLoginForm()
    {
        $response = $this->get($this->route);

        $response->assertStatus(200);
        $response->assertViewIs('dashboard.auth.login');
    }
}
