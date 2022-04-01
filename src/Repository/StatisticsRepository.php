<?php

namespace App\Repository;

use App\Entity\Statistics;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\Utilities;

/**
 * @method Statistics|null find($id, $lockMode = null, $lockVersion = null)
 * @method Statistics|null findOneBy(array $criteria, array $orderBy = null)
 * @method Statistics[]    findAll()
 * @method Statistics[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatisticsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Statistics::class);
    }

    // /**
    //  * @return Statistics[] Returns an array of Statistics objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('s.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Statistics
    {
        return $this->createQueryBuilder('s')
            ->andWhere('s.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
    public function findByTest($minLikes, $maxLikes)
    {  
        return $this->createQueryBuilder('s')
            ->andWhere('s.nb_likes > :minLikes')
            ->setParameter('minLikes', Utilities::checkNullity($minLikes, 0))
            ->andWhere('s.nb_likes < :maxLikes')
            ->setParameter('maxLikes', Utilities::checkNullity($maxLikes, 10000000000))
            ->getQuery()
            ->getResult()
        ;
    }

}
