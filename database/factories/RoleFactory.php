<?php

namespace Database\Factories;

use App\Models\Role;
use Illuminate\Database\Eloquent\Factories\Factory;

class RoleFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Role::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {       
        $role_name = ['admin', 'user'];
        $user_id = [1,2];

        return [
            'role_name' => $this->faker->randomElement($role_name),
            'user_id' => $this->faker->randomElement($user_id),
        ];
    }
}
