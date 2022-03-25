<?php

namespace App\Entity;

use App\Repository\CategoriesRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=CategoriesRepository::class)
 * @ApiResource
 */
class Categories
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Video::class, mappedBy="category", orphanRemoval=true)
     */
    private $video;

    /**
     * @ORM\OneToMany(targetEntity=Filters::class, mappedBy="category")
     */
    private $filters;

    public function __construct()
    {
        $this->video = new ArrayCollection();
        $this->filters = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    /**
     * @return Collection|Video[]
     */
    public function getVideo(): Collection
    {
        return $this->video;
    }

    public function addVideo(Video $videoId): self
    {
        if (!$this->video->contains($videoId)) {
            $this->video[] = $videoId;
            $videoId->setCategory($this);
        }

        return $this;
    }

    public function removeVideoId(Video $videoId): self
    {
        if ($this->video->removeElement($videoId)) {
            // set the owning side to null (unless already changed)
            if ($videoId->getCategory() === $this) {
                $videoId->setCategory(null);
            }
        }

        return $this;
    }

    public function __toString()
    {
        return $this->name;
    }

    /**
     * @return Collection<int, Filters>
     */
    public function getFilters(): Collection
    {
        return $this->filters;
    }

    public function addFilter(Filters $filter): self
    {
        if (!$this->filters->contains($filter)) {
            $this->filters[] = $filter;
            $filter->setCategory($this);
        }

        return $this;
    }

    public function removeFilter(Filters $filter): self
    {
        if ($this->filters->removeElement($filter)) {
            // set the owning side to null (unless already changed)
            if ($filter->getCategory() === $this) {
                $filter->setCategory(null);
            }
        }

        return $this;
    }
}
