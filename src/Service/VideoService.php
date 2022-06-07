<?php

namespace App\Service;

class VideoService
{

    public function getVideoJson($video, $allVideosOfCategory)
    {
       $nbViews = $video->getStatistic()->getNbViews();
       $nbViewsTotal = 0;
       foreach ($allVideosOfCategory as $videoOfCategory) {
           $nbViewsTotal += $videoOfCategory->getStatistic()->getNbViews();
       }
        $jsonArray = [
            'nbVuesAllVideos' => $nbViewsTotal,
            'nbViews' => $nbViews,
        ];

        return $jsonArray;
    }
}
