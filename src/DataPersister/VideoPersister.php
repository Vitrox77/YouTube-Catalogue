<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Video;
use Doctrine\ORM\EntityManagerInterface;

class VideoPersister implements DataPersisterInterface{

    protected $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    public function supports($data): bool
    {
         return $data instanceof Video;
    }

    public function persist($data)
    {
        //1. Mettre les champs ici qui sont automatiques (ici exemple avec une date)
        //$data->setCreatedAt(new \DateTime())

        //2. Demander à Docrtrine de persister
        //$this->em->persist($data);
        //$this->em->flush();
    }

    public function remove($data)
    {
        //1. Demander à Doctrine de supprimer la Video
        $this->em->remove($data);
        $this->em->flush();
    }
}

?>