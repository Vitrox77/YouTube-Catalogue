<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class StatsController extends AbstractController
{
    /**
     * @Route("/stats", name="stats_globale")
     */
    public function index($tabVideo = null): Response
    {
        
        return $this->render('stats/statsGlobale.html.twig', [
            'controller_name' => 'StatsController',
        ]);
    }
}
