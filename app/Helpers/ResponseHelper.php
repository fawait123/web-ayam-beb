<?php


namespace App\Helpers;


class ResponseHelper
{
    public static function send($data, $message = "Success", $statusCode = 200)
    {
        return response()->json([
            'message' => $message,
            'data' => $data
        ], $statusCode);
    }
}
