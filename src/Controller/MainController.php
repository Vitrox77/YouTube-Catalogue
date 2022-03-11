<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoriesRepository;

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="app_main")
     * Je mets la variable $categoryRepository en param pour pouvoir faire des requetes sur les videos
     */
    public function index(CategoriesRepository $categoryRepository): Response
    {

        $categories = $categoryRepository->findAll();//je stocke toutes mes videos dans une variable
        return $this->render('main/index.html.twig', [
            'categories' => $categories,
            'controller_name' => 'MainController',
        ]);
    }
}
