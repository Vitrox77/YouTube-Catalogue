<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;
use Symfony\Contracts\HttpClient\ResponseInterface;

class CallApiService
{
    private $client;

    public function __construct(HttpClientInterface $client)
    {
        $this->client = $client;
    }

    public function getVideoJson($videoId): array
    {
        try{
            $response = $this->client->request(
                'GET',
                'http://127.0.0.1:5001/api/video/download/'.$videoId,
                ['timeout' => PHP_INT_MAX]
            );
            $statusCode = $response->getStatusCode();
        }catch (\Exception $e){
            throw new \Exception('Error while calling API, ERROR : 500 - ' . $e->getMessage());
        }
        if($statusCode != 200){
            $response = json_decode($response->getContent(false), true);
            throw new \Exception('Error while calling API, ERROR : ' . $response['code'] . ' - ' . $response['error']);
        }
        return $response->toArray();
    }
}