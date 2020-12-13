<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LoginTest extends TestCase
{

	/** @test */
    public function showing_login_form()
    {
        $response = $this->get('login');

        $response->assertStatus(200);
        $response->assertViewIs('dashboard.auth.login');
    }

    /** @test */
    public function redirect_to_login_page(){

    	$response = $this->get('/')->assertRedirect('/user/projects');
    }


}
