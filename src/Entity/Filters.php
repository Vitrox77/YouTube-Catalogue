<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\FiltersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource()
 * @ORM\Entity(repositoryClass=FiltersRepository::class)
 */
class Filters
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
    private $min_likes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $max_likes;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $min_views;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $max_views;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $min_duration;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $max_duration;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $min_uploadDate;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $max_uploadDate;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $has_subtitles;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     */
    private $has_ageLimit;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $keywords;

    /**
     * @ORM\ManyToMany(targetEntity=Tags::class)
     */
    private $tags;

    /**
     * @ORM\ManyToOne(targetEntity=Categories::class, inversedBy="filters")
     */
    private $category;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    public function __construct()
    {
        $this->tags = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMinLikes(): ?int
    {
        return $this->min_likes;
    }

    public function setMinLikes(?int $min_likes): self
    {
        $this->min_likes = $min_likes;

        return $this;
    }

    public function getMaxLikes(): ?int
    {
        return $this->max_likes;
    }

    public function setMaxLikes(?int $max_likes): self
    {
        $this->max_likes = $max_likes;

        return $this;
    }

    public function getMinViews(): ?int
    {
        return $this->min_views;
    }

    public function setMinViews(?int $min_views): self
    {
        $this->min_views = $min_views;

        return $this;
    }

    public function getMaxViews(): ?int
    {
        return $this->max_views;
    }

    public function setMaxViews(?int $max_views): self
    {
        $this->max_views = $max_views;

        return $this;
    }

    public function getMinDuration(): ?int
    {
        return $this->min_duration;
    }

    public function setMinDuration(?int $min_duration): self
    {
        $this->min_duration = $min_duration;

        return $this;
    }

    public function getMaxDuration(): ?int
    {
        return $this->max_duration;
    }

    public function setMaxDuration(?int $max_duration): self
    {
        $this->max_duration = $max_duration;

        return $this;
    }

    public function getMinUploadDate(): ?\DateTimeInterface
    {
        return $this->min_uploadDate;
    }

    public function setMinUploadDate(?\DateTimeInterface $min_uploadDate): self
    {
        $this->min_uploadDate = $min_uploadDate;

        return $this;
    }

    public function getMaxUploadDate(): ?\DateTimeInterface
    {
        return $this->max_uploadDate;
    }

    public function setMaxUploadDate(?\DateTimeInterface $max_uploadDate): self
    {
        $this->max_uploadDate = $max_uploadDate;

        return $this;
    }

    public function getHasSubtitles(): ?bool
    {
        return $this->has_subtitles;
    }

    public function setHasSubtitles(?bool $has_subtitles): self
    {
        $this->has_subtitles = $has_subtitles;

        return $this;
    }

    public function getHasAgeLimit(): ?bool
    {
        return $this->has_ageLimit;
    }

    public function setHasAgeLimit(?bool $has_ageLimit): self
    {
        $this->has_ageLimit = $has_ageLimit;

        return $this;
    }

    public function getKeywords(): ?string
    {
        return $this->keywords;
    }

    public function setKeywords(?string $keywords): self
    {
        $this->keywords = $keywords;

        return $this;
    }

    /**
     * @return Collection|Tags[]
     */
    public function getTags(): Collection
    {
        return $this->tags;
    }

    public function addTag(Tags $tag): self
    {
        if (!$this->tags->contains($tag)) {
            $this->tags[] = $tag;
        }

        return $this;
    }

    public function removeTag(Tags $tag): self
    {
        $this->tags->removeElement($tag);

        return $this;
    }

    public function getCategory(): ?Categories
    {
        return $this->category;
    }

    public function setCategory(?Categories $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

}
