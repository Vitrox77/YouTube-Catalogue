<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Service\VideoService; 
use App\Entity\Video;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class UniqueVideoController extends AbstractController
{
    /**
     * @Route("/video/{id}", name="app_video_detail")
     */
    public function videoDetail($id): Response
    {
        $video  = $this->getDoctrine()->getRepository(Video::class)->find($id);

        return $this->render('video/index.html.twig', [
            'controller_name' => 'VideoController',
            'video' => $video,
        ]);
    }

    /**
     * @Route("/video/{id}/getData", name="get_video_json_data", methods={"GET"})
     */
    public function getVideoData($id, VideoService $videoService): JsonResponse
    {
        $video  = $this->getDoctrine()->getRepository(Video::class)->find($id);
        $videoTitle = $video->getTitle();
        $videoUploader = $video->getUploader();

        $jsonData = $videoService->getVideoJson($videoUploader , $videoTitle);

        return new JsonResponse('test') ;
    }

}
