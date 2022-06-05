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
        return $jsonArray;
    }

    public function getCountCategories($videos)
    {
        //je recupere le nom des categories dans lesquelles il y a des vidéos
        $categoriesNameWithVideos = [];
        foreach ($videos as $video) {
            if(!in_array($video->getCategory()->getName(), $categoriesNameWithVideos)){
                $categoriesNameWithVideos[] = $video->getCategory()->getName();
            }
        } 
        //je fais un compteur pour chaque categorie avec les vidéos
        $categoriesCount = [];
        foreach ($categoriesNameWithVideos as $categoryName) {
            $categoriesCount[$categoryName] = 0;
            foreach ($videos as $video) {
                if($video->getCategory()->getName() == $categoryName){
                    $categoriesCount[$categoryName]++;
                }
            }
        }
        //relier les noms des categories avec leur nombre de vidéo
        $categoriesNameWithCount = [];
        foreach ($categoriesCount as $categoryName => $count) {
            $categoriesNameWithCount[] = [
                'name' => $categoryName,
                'count' => $count,
            ];
        }

        return $categoriesNameWithCount;
    }


    public function getTagsJsonData($videos)
    {
        //je fais un tableau qui contient le nom de la video, le nombre de tags, et le nombre de vue
        $tagsJsonData = [];
        foreach ($videos as $video) {
            $tagsJsonData[] = [
                'nbTags' => count($video->getTags()),
                'nbViews' => $video->getStatistic()->getNbViews(),
            ];
        }
        
        return $tagsJsonData;
    }

    public function getDateJsonData($videos)
    {
        //je fais un tableau qui contient le nom de la video, le nombre de tags, et le nombre de vue
        $dateJsonData = [];
        foreach ($videos as $video) {
            $dateJsonData[] = [
                'release_date' => $video->getStatistic()->getReleaseDate(),
                'nbViews' => $video->getStatistic()->getNbViews(),
            ];
        }
        return $dateJsonData;
    }

    public function getRecapJsonData($videos)
    {
        //je fais un tableau qui contient le nom de la video, le nombre de tags, et le nombre de vue
        $recapJsonData = [];
        
        //nombre de vues en moyenne sur les vidéos
        $nbViews = 0;
        foreach ($videos as $video) {
            $nbViews += $video->getStatistic()->getNbViews();
        }
        $nbViews = $nbViews / count($videos);

        //nombre de likes en moyenne sur les vidéos
        $nbLikes = 0;
        foreach ($videos as $video) {
            $nbLikes += $video->getStatistic()->getNbLikes();
        }
        $nbLikes = $nbLikes / count($videos);

        //duree moyenne des vidéos
        $duration = 0;
        foreach ($videos as $video) {
            $duration += $video->getStatistic()->getDuration();
        }
        $duration = $duration / count($videos);

        //nombre de tags en moyenne 
        $nbTags = 0;
        foreach ($videos as $video) {
            $nbTags += count($video->getTags());
        }
        $nbTags = $nbTags / count($videos);

        //nombre total de vidéos
        $nbVideos = count($videos);

        $recapJsonData = [
            'nbViews' => intval($nbViews),
            'nbLikes' => intval($nbLikes),
            'duration' => $duration,
            'nbTags' => intval($nbTags),
            'nbVideos' => $nbVideos,
        ];
        return $recapJsonData;
    }
    
}