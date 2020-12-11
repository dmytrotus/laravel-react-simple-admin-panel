<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\User::factory(2)->create();
        \App\Models\Role::factory(2)->create(); 
        \App\Models\Project::factory()->times(20)->create();
        \App\Models\Task::factory()->times(20)->create(); 
    }
}
