<?php

namespace App\Repositories;

use App\Models\User;

class AuthRepository
{
    protected $model;
    public function __construct(User $user)
    {
        $this->model = $user;
    }

    public function model()
    {
        return $this->model;
    }
}
