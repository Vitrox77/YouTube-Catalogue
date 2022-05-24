<?php

namespace App\Service;
use App\Repository\TagsRepository;


class TagsService
{
    protected $tagsRepository;

    public function __construct(TagsRepository $tagsRepository)
    {
        $this->tagsRepository = $tagsRepository;
    } 

    public function searchTagByName($name): array
    {
        $this->tagsRepository->findByString($name);

        return $name;
    }
}