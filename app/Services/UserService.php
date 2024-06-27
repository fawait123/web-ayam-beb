<?php

namespace App\Services;

use App\Helpers\PaginationHelper;
use App\Helpers\ResponseHelper;
use App\Http\Resources\User\UserCollection;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserService extends PaginationHelper
{
    protected $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    public function getWithPagination(Request $request): JsonResponse
    {
        try {
            $page = $request->filled('page') ? $request->page : 1;
            $limit = $request->filled('limit') ? $request->limit : 10;


            $result = $this->userRepository->model()->query();

            if ($request->filled('search')) {
                $result->where(function ($q) use ($request) {
                    $q->where('name', 'like', '%' . $request->search . '%')->orWhere('username', 'like', '%' . $request->search . '%');
                });
            }

            if ($request->filled('filter')) {

                $result->where($request->filter['key'], $request->filter['value']);
            }

            $result = $result->paginate($limit, '*', 'page', $page);

            parent::__construct($result);
            return ResponseHelper::send($this->toPagination(new UserCollection($result)));
        } catch (\Throwable $th) {
            return ResponseHelper::send([], $th->getMessage(), 500);
        }
    }


    public function store(Request $request): JsonResponse
    {
        try {
            $user = $this->userRepository->model()->create($request->merge([
                'password' => Hash::make($request->password)
            ])->all());

            return ResponseHelper::send($user);
        } catch (\Throwable $th) {
            return ResponseHelper::send([], $th->getMessage(), 500);
        }
    }
}
