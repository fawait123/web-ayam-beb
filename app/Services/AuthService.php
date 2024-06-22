<?php

namespace App\Services;


use App\Helpers\ResponseHelper;
use App\Repositories\AuthRepository;
use Illuminate\Support\Facades\Hash;

class AuthService
{

    protected $authRepository;
    public function __construct(AuthRepository $authRepository)
    {
        $this->authRepository = $authRepository;
    }


    public function login(string $username, string $password)
    {
        try {
            $user = $this->authRepository->model()->where("username", $username)->first();

            if (!$user) {
                return ResponseHelper::send([], 'Username atau password tidak ditemukan', 400);
            }


            if (!Hash::check($password, $user->password)) {
                return ResponseHelper::send([], 'Username atau password tidak ditemukan', 400);
            }

            $token = $user->createToken("AYAM BEB SPESIAL SERUNDENG");
            $payload = [
                'token' => $token->accessToken,
                'expiret_at' => $token->token->expires_at,
                'user' => $user
            ];

            return ResponseHelper::send($payload);
        } catch (\Throwable $th) {
            return ResponseHelper::send([], $th->getMessage(), 500);
        }
    }
}
