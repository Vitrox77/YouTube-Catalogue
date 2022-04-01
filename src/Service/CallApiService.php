<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class CallApiService
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getVideoJson($videoId): array
    {
        $response = $this->client->request(
            'GET',
            'http://127.0.0.1:5001/api/video/'.$videoId,
        );
        
        return $response->toArray();
    }
}