<?php

namespace App\Controller;

use App\Repository\CategoriesRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\VideoRepository; //j'inclus le repository Video pour faire les requetes SQL

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="main")
     * Je mets la variable $categoryRepository en param pour pouvoir faire des requetes sur les videos
     */
    public function index(CategoriesRepository $categoryRepository): Response
    {
        $all_categories = $categoryRepository->findAll();//je stocke toutes mes videos dans une variable
        return $this->render('main/index.html.twig', [
            'controller_name' => 'MainController',
            'all_categories' => $all_categories //avant la fleche --> nom de la variable twig, apres --> nom variable php
        ]);
    }
}
