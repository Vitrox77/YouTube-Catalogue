<?php

namespace App\Service;

use App\Entity\Statistics;

class StatsService
{
    public function getJsonForChart($tabVideo)
    {
        $jsonArray = [];

        foreach ($tabVideo as $video) {
            $statsVideo = new Statistics();
            $statsVideo = $video->getStatistic();
            $jsonArray[] = [
                'name' => $video->getTitle(),
                'nbViews' => $statsVideo->getNbViews(),
                'nbLikes' => $statsVideo->getNbLikes(),
            ];
        }
        return json_encode($jsonArray);
    }
}