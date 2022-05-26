<?php

namespace App\Repository;

use App\Entity\Tags;
use App\Entity\Video;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\Utilities;
use DateTime;

/**
 * @method Video|null find($id, $lockMode = null, $lockVersion = null)
 * @method Video|null findOneBy(array $criteria, array $orderBy = null)
 * @method Video[]    findAll()
 * @method Video[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VideoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Video::class);
    }

    // /**
    //  * @return Video[] Returns an array of Video objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('v')
            ->andWhere('v.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('v.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    public function selectVideosId(): array
    {
        $videos = $this->createQueryBuilder('v')
            ->select('v.id')
            ->getQuery()
            ->getResult();

        return $videos;
    }

    public function findOneOrNullById($id): ?Video
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.url = :val')
            ->setParameter('val', $id)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }


    /*
    SELECT v.id
    FROM video v
    JOIN tags_video tv ON v.id = tv.video_id
    JOIN tags t ON tv.tags_id = t.id
    WHERE t.name LIKE "%test%" OR v.title LIKE "%test%"
    */

    public function selectByFilter($min_likes, $max_likes, $min_views, $max_views, $min_duration, $max_duration, $min_uploadDate, $max_uploadDate, $category, $keyword){
        if($keyword == null){
            $keyword = "";
        }
        $qb = $this->createQueryBuilder('v')
            //Partie du keyword
            ->leftJoin('v.tags', 't')
            ->where('v.title LIKE :keyword')
            ->orWhere('t.name LIKE :keyword')
            ->setParameter('keyword', '%'.$keyword.'%')
            //Partie des stats
            ->leftJoin('v.statistic', 's')
            ->andWhere('s.nb_likes >= :min_likes')
            ->setParameter('min_likes', Utilities::checkNullity($min_likes, 0))
            ->andWhere('s.nb_likes <= :max_likes')
            ->setParameter('max_likes', Utilities::checkNullity($max_likes, PHP_INT_MAX))
            ->andWhere('s.nb_views >= :min_views')
            ->setParameter('min_views', Utilities::checkNullity($min_views, 0))
            ->andWhere('s.nb_views <= :max_views')
            ->setParameter('max_views', Utilities::checkNullity($max_views, PHP_INT_MAX))
            ->andWhere('s.duration >= :min_duration')
            ->setParameter('min_duration', Utilities::checkNullity($min_duration, 0))
            ->andWhere('s.duration <= :max_duration')
            ->setParameter('max_duration', Utilities::checkNullity($max_duration, PHP_INT_MAX))
            ->andWhere('s.release_date >= :min_uploadDate')
            ->setParameter('min_uploadDate', Utilities::checkNullity($min_uploadDate, new DateTime('1970-01-01')))
            ->andWhere('s.release_date <= :max_uploadDate')
            ->setParameter('max_uploadDate', Utilities::checkNullity($max_uploadDate, new DateTime('2300-01-01')));
            //Partie de la catégorie
            if($category != null){
                $qb = $qb->leftJoin('v.category', 'c')
                    ->andWhere('c.name = :category')
                    ->setParameter('category', $category->getName());
            }
            $qb = $qb->getQuery();
            // error_log("\n".date("H:i:s").":\n".print_r($qb->getSQL(),true),3,'C:\wamp64\logs\log_perso.log');
        $qb = $qb->getResult();
        return $qb;
    }
}
