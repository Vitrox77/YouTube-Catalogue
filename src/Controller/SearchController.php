<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\FilterType;
use App\Entity\Filters;

class SearchController extends AbstractController
{
    /**
     * @Route("/search", name="app_search")
     */
    public function index(): Response
    {
        return $this->render('search/index.html.twig', [
            'controller_name' => 'SearchController',
        ]);
    }

    //nouvelle route de test des filtres pour Matthias
    /**
     * @Route("/search/test", name="app_search_test")
     */
    public function test(Request $request): Response
    {
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
            var_dump($data);

            //sinon on fait simplement la recherche des videos selon les filtres
            //on lit la modale de tags et on les enregistres en bdd en mettant isTagPerso à 1

            //retourne la vue avec les données
            return $this->render('search/test.html.twig', [
                'filterForm' => $filterForm->createView(),
                'filters' => $filters,
                'data' => $data,
            ]);
        }
        

        return $this->render('search/test.html.twig', [
            'filterForm' => $filterForm->createView(),
            'filters' => $filters,
        ]);
    }

}


