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
        // https://stackoverflow.com/questions/31878323/add-data-when-running-symfony-migrations
        $array_age = ['20','10', '12'];
        $categories = $categoryRepository->findAll();//je stocke toutes mes videos dans une variable
        return $this->render('menu/index.html.twig', [
            'categories' => $categories,
            'age' => $array_age,
            'controller_name' => 'MenuController',
        ]);
    }
}
