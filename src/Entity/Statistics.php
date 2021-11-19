<?php

namespace App\Entity;

use App\Repository\StatisticsRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=StatisticsRepository::class)
 */
class Statistics
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nb_likes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nb_dislikes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nb_coms;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nb_views;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $age_limit;

    /**
     * @ORM\Column(type="date")
     */
    private $release_date;

    /**
     * @ORM\OneToOne(targetEntity=Video::class, inversedBy="statistic", cascade={"persist", "remove"})
     * @ORM\JoinColumn(nullable=false)
     */
    private $video;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNbLikes(): ?int
    {
        return $this->nb_likes;
    }

    public function setNbLikes(?int $nb_likes): self
    {
        $this->nb_likes = $nb_likes;

        return $this;
    }

    public function getNbDislikes(): ?int
    {
        return $this->nb_dislikes;
    }

    public function setNbDislikes(?int $nb_dislikes): self
    {
        $this->nb_dislikes = $nb_dislikes;

        return $this;
    }

    public function getNbComs(): ?int
    {
        return $this->nb_coms;
    }

    public function setNbComs(?int $nb_coms): self
    {
        $this->nb_coms = $nb_coms;

        return $this;
    }

    public function getNbViews(): ?int
    {
        return $this->nb_views;
    }

    public function setNbViews(?int $nb_views): self
    {
        $this->nb_views = $nb_views;

        return $this;
    }

    public function getAgeLimit(): ?int
    {
        return $this->age_limit;
    }

    public function setAgeLimit(?int $age_limit): self
    {
        $this->age_limit = $age_limit;

        return $this;
    }

    public function getReleaseDate(): ?\DateTimeInterface
    {
        return $this->release_date;
    }

    public function setReleaseDate(\DateTimeInterface $release_date): self
    {
        $this->release_date = $release_date;

        return $this;
    }

    public function getVideo(): ?Video
    {
        return $this->video;
    }

    public function setVideo(Video $video): self
    {
        $this->video = $video;

        return $this;
    }
}
