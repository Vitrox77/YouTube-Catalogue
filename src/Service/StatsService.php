<?php

namespace App\Service;

use App\Entity\Statistics;

class StatsService
{
    public function getJsonForChart($tabVideo)
    {
        $jsonArray = [];

        foreach ($tabVideo as $video) {
            if($video->getStatistic() != null){
                $jsonArray[] = [
                    'name' => $video->getTitle(),
                    'nbViews' => $video->getStatistic()->getNbViews(),
                    'nbLikes' => $video->getStatistic()->getNbLikes(),
                ];
            }
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
            if($video->getStatistic() != null){
                $tagsJsonData[] = [
                    'nbTags' => count($video->getTags()),
                    'nbViews' => $video->getStatistic()->getNbViews(),
                ];
            }
        }
        
        return $tagsJsonData;
    }

    public function getDateJsonData($videos)
    {
        //je fais un tableau qui contient le nom de la video, le nombre de tags, et le nombre de vue
        $dateJsonData = [];
        foreach ($videos as $video) {
            if($video->getStatistic() != null)
            {
                $dateJsonData[] = [
                    'release_date' => $video->getStatistic()->getReleaseDate(),
                    'nbViews' => $video->getStatistic()->getNbViews(),
                ];
            }
        }
        return $dateJsonData;
    }

    public function getRecapJsonData($videos)
    {
        //je fais un tableau qui contient le nom de la video, le nombre de tags, et le nombre de vue
        $recapJsonData = [];
        
        //nombre de vues en moyenne sur les vidéos
        $nbViews = 0;
        $nbLikes = 0;
        $duration = 0;
        $nbTags = 0;

        foreach ($videos as $video) {
            if($video->getStatistic() != null)
            {
                $nbViews += $video->getStatistic()->getNbViews();
                $nbLikes += $video->getStatistic()->getNbLikes();
                $duration += $video->getStatistic()->getDuration();   
            }
            if($video->getTags() != null)
            {
                $nbTags += count($video->getTags());
            }
        }

        $nbViews = $nbViews / count($videos);
        $nbLikes = $nbLikes / count($videos);
        $duration = $duration / count($videos);
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