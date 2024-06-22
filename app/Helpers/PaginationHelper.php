<?php

namespace App\Helpers;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\LengthAwarePaginator;
use Mockery\Matcher\Any;

class PaginationHelper
{
    protected $total;
    protected $page;
    protected $limit;

    public function __construct(LengthAwarePaginator $collection)
    {
        $this->total = $collection->total();
        $this->page = $collection->currentPage();
        $this->limit = $collection->perPage();
    }
    public function toPagination(JsonResource $data)
    {
        return [
            'total' => $this->total,
            'page' => $this->page,
            'limit' => $this->limit,
            'data' => $data
        ];
    }
}
