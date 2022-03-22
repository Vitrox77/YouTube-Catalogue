<?php

namespace App\Controller;

use App\Form\ImportCSVType;
use App\Form\UniqueUrlType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoriesRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Service\CallApiService;

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="app_main")
     * Je mets la variable $categoryRepository en param pour pouvoir faire des requetes sur les videos
     */
    public function index(CategoriesRepository $categoryRepository, Request $request): Response
    {
        // https://stackoverflow.com/questions/31878323/add-data-when-running-symfony-migrations

        $URLform = $this->createForm(UniqueUrlType::class);
        $CSVform = $this->createForm(ImportCSVType::class);

        $URLform->handleRequest($request);
        $CSVform->handleRequest($request);
        
        if ($URLform->isSubmitted() && $URLform->isValid()) {
            //todo appeler l'api avec l'url donné
            return $this->redirectToRoute('app_main');
        }

        if ($CSVform->isSubmitted() && $CSVform->isValid()) {
            //todo lire le csv
            return $this->redirectToRoute('app_main');
        }

        return $this->render('menu/index.html.twig', [
            'controller_name' => 'MenuController',
            'CSVform' => $CSVform->createView(),
            'URLform' => $URLform->createView()
        ]);
    }

    /**
     * @Route("/apiTest", name="apiTest")
     * Je teste un appel evrs une api
     */
    public function getJsonInfos(CallApiService $callApiService) :Response{
        $videoId = 'jjs27jXL0Zs';
        return $this->render('menu/testApi.html.twig', [
            'data' => $callApiService->getVideoJson($videoId),
        ]);
    }
}
