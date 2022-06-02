<?php

namespace App\Service;

use App\Entity\Uploader;

class VideoService
{
    public function getVideoJson($uploader, $title)
    {
       $videosFromUploader = $uploader->getVideo();
       foreach ($videosFromUploader as $video) {
           $jsonArray[] = [
               'title' => $video->getStatistic()->getTitle(),
               'nbViews' => $video->getStatistic()->getNbViews(),
               'nbLikes' => $video->getStatistic()->getNbLikes(),
           ];
        }
        //ajouter la variable titre à la suite du jsonArray
        $jsonArray[] = $title;

        return $jsonArray;
    }
}
