<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Video;
use App\Service\StatsService;
use Symfony\Component\HttpFoundation\JsonResponse;

class StatsController extends AbstractController
{
     /**
     * @Route("/stats/", name="stats")
     * Cette route renvoi l'utilisateur sur la page stats avec toutes les vidéos
     */
    public function stats(): Response
    {
        $videosId =[];
        $videosId = $this->getDoctrine()->getRepository(Video::class)->selectVideosId();
        $videosIdString = '';

        foreach ($videosId as $videoId) {
            //on les mets dans un string à la suite séparé par des virgules
            $videosIdString .= $videoId['id'].',';
        }
        return $this->redirectToRoute('stats_globale', [
            'stringParam' => $videosIdString,
        ]);
    }
    
    /**
     * @Route("/stats/{stringParam}", name="stats_globale")
     */
    public function index($stringParam): Response
    {
            return $this->render('stats/statsGlobale.html.twig', [
                'controller_name' => 'StatsController',
                'stringParam' => $stringParam,
            ]);
    }

    /**
     * @Route("/stats/{stringParam}/getData", name="get_graph_json_data", methods={"GET"})
     */
    public function getData($stringParam, StatsService $statsService): JsonResponse
    {
        //séparer le sring param pour récuperer les id de chaque video et enlever les virgules
        //je verifie si le dernier caractere est une virgule
        if(substr($stringParam, -1) == ","){
            $stringParam = substr($stringParam, 0, -1);
        }
        $stringParam = explode(",", $stringParam);
        $stringParam = array_map('intval', $stringParam);

        //je recupere les données de la video
        $videos = $this->getDoctrine()->getRepository(Video::class)->findBy(['id' => $stringParam]);

        //envoyer les videos au service StatsService pour traiter les donner et récupérer seul les données utiles pour le graphique
        $jsonData = $statsService->getJsonForChart($videos);

        return new JsonResponse($jsonData);
    }
}
