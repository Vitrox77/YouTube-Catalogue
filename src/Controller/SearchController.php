<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\FilterType;
use App\Entity\Filters;
use App\Entity\Video;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="app_search")
     */
    public function index(Request $request): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        //je recupere le formulaire FilterType
        $filterForm = $this->createForm(FilterType::class);
        $filterForm->handleRequest($request);

        //je recupere tous les filtres existants via le repository
        $filters = $this->getDoctrine()->getRepository(Filters::class)->findAll();
        
        //is le formulaire est valide
        if ($filterForm->isSubmitted() && $filterForm->isValid()) {
            //je recupere les données du formulaire
            $data = $filterForm->getData();

            //si la checkbox wantSave est cochée on enregistre en bdd
            // var_dump($data);

            $min_likes = $data['min_likes'];
            $max_likes = $data['max_likes'];
            $min_views = $data['min_views'];
            $max_views = $data['max_views'];
            $min_duration = $data['min_duration'];
            $max_duration = $data['max_duration'];
            $min_uploadDate = $data['min_uploadDate'];
            $max_uploadDate = $data['max_uploadDate'];
            $has_subtitles = $data['has_subtitles'];
            $keyWords = $data['keywords'];
            $category = $data['category'];
            $filterName = $data['name'];

            //si la checkbox wantSave est cochée on enregistre en bdd
            if($filterName =! null){
                $newFilter = new Filters();
                $newFilter->setMinLikes($min_likes);
                $newFilter->setMaxLikes($max_likes);
                $newFilter->setMinViews($min_views);
                $newFilter->setMaxViews($max_views);
                $newFilter->setMinDuration($min_duration);
                $newFilter->setMaxDuration($max_duration);
                $newFilter->setMinUploadDate($min_uploadDate);
                $newFilter->setMaxUploadDate($max_uploadDate);
                $newFilter->setHasSubtitles($has_subtitles);
                $newFilter->setHasAgeLimit(false);
                $newFilter->setKeywords($keyWords);
                $newFilter->setCategory($category);
                $newFilter->setName($filterName);

                $entityManager->persist($newFilter);
                $entityManager->flush();
                //enregistre le filtre en db
            }
            //je recupere toutes les videos via le repository
            $tabVideos = $this->getDoctrine()->getRepository(Video::class)->selectByFilter($min_likes, $max_likes, $min_views, $max_views, $min_duration, $max_duration, $min_uploadDate, $max_uploadDate, $category, $keyWords);
            $tabVideo = array();
            //je boucle sur la variable pour remplir le tableau $tabVideo
            foreach($tabVideos as $video){
                array_push($tabVideo, $video);
            }

            //retourne la vue avec les données
            return $this->render('search/index.html.twig', [
                'filterForm' => $filterForm->createView(),
                'filters' => $filters,
                'data' => $tabVideo,
                'category' => $category,
            ]);
        }
        

        return $this->render('search/index.html.twig', [
            'filterForm' => $filterForm->createView(),
            'filters' => $filters,
        ]);
    }

}


