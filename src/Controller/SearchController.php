<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\FilterType;
use App\Form\WatchStatType;
use App\Entity\Filters;
use App\Entity\Video;
use App\Service\TagsService;
use PhpParser\Node\Expr\Cast\Array_;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="app_search")
     */
    public function index(Request $request, TagsService $tagsService): Response
    {
        $entityManager = $this->getDoctrine()->getManager();
        //je recupere le formulaire FilterType
        $filterForm = $this->createForm(FilterType::class);
        $filterForm->handleRequest($request);
        //je recup le form pour voir les statistiques
        $statForm = $this->createForm(WatchStatType::class);
        $statForm->handleRequest($request);

        //je recupere tous les filtres existants via le repository
        $filters = $this->getDoctrine()->getRepository(Filters::class)->findAll();
        $stringParam = "";

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
            $has_subtitles =false; //$data['has_subtitles'];
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
                $stringParam = $stringParam . strval($video->getId()) . ",";
            }

            //retourne la vue avec les données
            return $this->render('search/index.html.twig', [
                'filterForm' => $filterForm->createView(),
                'statForm' => $statForm->createView(),
                'filters' => $filters,
                'data' => $tabVideo,
                'stringParam' => $stringParam,
            ]);
        }

       
        //si le form pour voir les statistiques est valide
        if($statForm->isSubmitted() && $statForm->isValid()){
            return $this->redirectToRoute("stats_globale", [
                'tabVideo' => $stringParam,
            ]);
            //echo 'YOUHOUTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT<br><br><br><br><br><br><br>freeeeeeeeeeeeeeee';
        }

        return $this->render('search/index.html.twig', [
            'filterForm' => $filterForm->createView(),
            'filters' => $filters,
        ]);
    }

    /**
     * @Route("/search/get/{tagName}", methods={"GET"}, name="app_search_with_tag_name")
     */
    public function searchByTagName(Request $request, TagsService $tagsService, string $tagName) : Response{
        //Search tag by name
        // $tag = $request->query->get('tagName');
        $tabTags = $tagsService->searchTagByName($tagName);
        $test = array();
        $test[] = "test";
        if($tabTags != null){
            $response = new Response(json_encode($tabTags));
            $response->headers->set('Content-Type', 'application/json');
            return $response;
        }
        return new Response(
            $tabTags
        );
    }
    
     
}


