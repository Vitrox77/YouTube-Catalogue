<?php

namespace App\Controller;

use App\Form\ImportCSVType;
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
        $array_age = ['20','10', '12'];
        $categories = $categoryRepository->findAll();//je stocke toutes mes videos dans une variable


        $form = $this->createForm(ImportCSVType::class);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            //todo
            return $this->redirectToRoute('app_main');
        }

        return $this->render('menu/index.html.twig', [
            'categories' => $categories,
            'age' => $array_age,
            'controller_name' => 'MenuController',
            'CSVform' => $form->createView(),
            
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
