<?php

namespace Database\Factories;

use App\Models\Project;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {   
        $title = 'Project:'.rand(0,999);
        $description = $this->faker->text('25');
        return [
            'title' => $title,
            'description' => $description,
            'user_id' => rand(1,2),
        ];
    }
}
