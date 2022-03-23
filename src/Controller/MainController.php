<?php

namespace App\Controller;

use App\Entity\Categories;
use App\Entity\Uploader;
use App\Entity\Video;
use App\Form\ImportCSVType;
use App\Form\UniqueUrlType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\CategoriesRepository;
use Symfony\Component\HttpFoundation\Request;
use App\Service\CallApiService;
use DateTime;
use Doctrine\Persistence\ManagerRegistry;

class MainController extends AbstractController
{
    /**
     * @Route("/main", name="app_main")
     */
    public function index(Request $request, CallApiService $callApiService, ManagerRegistry $doctrine): Response
    {
        // https://stackoverflow.com/questions/31878323/add-data-when-running-symfony-migrations

        $entityManager = $doctrine->getManager();

        $URLform = $this->createForm(UniqueUrlType::class);
        $CSVform = $this->createForm(ImportCSVType::class);

        $URLform->handleRequest($request);
        $CSVform->handleRequest($request);

        /* ----------------------------------------------------------------------------------------------------------------------------- */
        /* ---------------------------------------- ZONE DU FORMULAIRE D'UN LIEN UNIQUE ------------------------------------------------ */
        /* ----------------------------------------------------------------------------------------------------------------------------- */
        
        if ($URLform->isSubmitted() && $URLform->isValid()) {

            $data = $URLform->getData();//je recup le lien
            $videoId = substr($data['unique_link'], -11);//je le coupe pour prendre que l'id

            //on vérifie avant de faire l'appel à l'api si la vidéo existe déjà
            $videoRepository = $doctrine->getRepository(Video::class);
            $searchedVideo = $videoRepository->findOneOrNullById($videoId);
            if($searchedVideo != NULL){
                //si la video existe
                $videoTitle = 'La vidéo existe déjà dans la base de données et ne sera donc pas téléchargée';
            }else{
                //toDo asynchrone
                $json = $callApiService->getVideoJson($videoId);

                //toDo enregistrer en base les infos
                $newVideo = new Video();
                $videoTitle = $json['result']['title'];
                
                /* ************************ GESTION DE LA CATEGORIE ****************************** */
                $category = $json['result']['categories'][0];
                $categoryRepository = $doctrine->getRepository(Categories::class);
                $searchedCategory = $categoryRepository->findOneOrNullByName($category);
                //si la catégorie n'existe pas, on la créée
                if($searchedCategory == NULL){
                    $newCategory = new Categories();
                    $newCategory->setName($category);
                    $entityManager->persist($newCategory);
                    $entityManager->flush();
                    $finalCategory = $categoryRepository->findOneBy([
                        'name' => $json['result']['categories'][0]
                    ]);
                    $newVideo->setUploader($finalCategory);
                }else{
                    $newVideo->setCategory($searchedCategory);
                }
                /* ******************************************************************************** */

                /* ************************* GESTION DE L'UPLOADER ******************************** */
                $uploader_id = $json['result']['uploader_id'];
                $uploaderRepository = $doctrine->getRepository(Uploader::class);
                $searchedUploader = $uploaderRepository->findOneOrNullByYtId($uploader_id);
                //si l'uploader n'existe pas, on le crée
                if($searchedUploader == NULL){
                    $newUploader = new Uploader();
                    $newUploader->setChannelId($uploader_id);
                    $newUploader->setName($json['result']['channel']);
                    $entityManager->persist($newUploader);
                    $entityManager->flush();
                    $finalUploader = $uploaderRepository->findOneBy([
                        'name' => $json['result']['channel'],
                        'channel_id' => $uploader_id
                    ]);
                    $newVideo->setUploader($finalUploader);
                }else{
                    $newVideo->setUploader($searchedUploader);
                }
                /* ******************************************************************************** */

                $newVideo->setTitle($json['result']['title']);//title
                $newVideo->setUrl($json['result']['id']);//id de la video
                $newVideo->setThumbnail($json['result']['thumbnail']);//url de la thumbnail (todo save dans le serv et mettre le chemin)
                $newVideo->setUploadDate(new DateTime($json['result']['upload_date']));//upload date
                $newVideo->setDescription($json['result']['description']);//description
                $newVideo->setDuration($json['result']['duration']);//durée en sec
                $newVideo->setDownloadDate(new DateTime('now'));//date de dl pour nous

                //j'envoi en bdd
                $entityManager->persist($newVideo);
                $entityManager->flush();

            }//end else video existe pas
                

            return $this->render('menu/index.html.twig', [
                'CSVform' => $CSVform->createView(),
                'URLform' => $URLform->createView(),
                'videoTitle' => $videoTitle
            ]);
        }


        /* ----------------------------------------------------------------------------------------------------------------------------- */
        /* ------------------------------------------ ZONE DU FORMULAIRE DU FICHIER CSV ------------------------------------------------ */
        /* ----------------------------------------------------------------------------------------------------------------------------- */

        if ($CSVform->isSubmitted() && $CSVform->isValid()) {
            $file = $CSVform->get('CSV_file')->getData();
            $extension = $file->getMimeType();
            var_dump($extension);
            
            //Open the file
            if(($handle = fopen($file->getPathName(), "r")) !== false){
                //Read and process the lines
                while (($data = fgetcsv($handle)) !== false) {
                    // Do the processing: Map line to entity, validate if needed
                    $videoId = substr($data[0], -11);;
                    //appel de l'api //toDo asynchrone
                    $json = $callApiService->getVideoJson($videoId);
                    var_dump($json);
                }
                //Close the file
                fclose($handle);
            }
            
            return $this->redirectToRoute('app_main');
        }

        return $this->render('menu/index.html.twig', [
            'CSVform' => $CSVform->createView(),
            'URLform' => $URLform->createView()
        ]);
    }
}
