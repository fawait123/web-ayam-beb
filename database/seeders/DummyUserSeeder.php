<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DummyUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = \Faker\Factory::create();
        for ($i = 0; $i < 1000; $i++) {
            User::create([
                'name' => $faker->name(),
                'username' => $faker->userName(),
                'email' => $faker->email(),
                'password' => Hash::make('123456789'),
                'email_verified_at' => date('Y-m-d'),
            ]);
        }
    }
}
