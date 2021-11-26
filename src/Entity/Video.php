<?php

namespace App\Entity;

use App\Repository\VideoRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * @ORM\Entity(repositoryClass=VideoRepository::class)7
 * @ApiResource
 */
class Video
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
    private $title;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $thumbnail;

    /**
     * @ORM\Column(type="date")
     */
    private $upload_date;

    /**
     * @ORM\Column(type="text", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="integer")
     */
    private $duration;

    /**
     * @ORM\ManyToOne(targetEntity=Categories::class, inversedBy="video")
     * @ORM\JoinColumn(nullable=false)
     */
    private $category;

    /**
     * @ORM\OneToOne(targetEntity=Statistics::class, mappedBy="video", cascade={"persist", "remove"})
     */
    private $statistic;

    /**
     * @ORM\ManyToOne(targetEntity=Uploader::class, inversedBy="video")
     * @ORM\JoinColumn(nullable=false)
     */
    private $uploader;

    /**
     * @ORM\OneToMany(targetEntity=Subtitles::class, mappedBy="video", orphanRemoval=true)
     */
    private $subtitles;

    /**
     * @ORM\ManyToMany(targetEntity=Tags::class, mappedBy="video")
     */
    private $tags;

    public function __construct()
    {
        $this->subtitles = new ArrayCollection();
        $this->tags = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getThumbnail(): ?string
    {
        return $this->thumbnail;
    }

    public function setThumbnail(string $thumbnail): self
    {
        $this->thumbnail = $thumbnail;

        return $this;
    }

    public function getUploadDate(): ?\DateTimeInterface
    {
        return $this->upload_date;
    }

    public function setUploadDate(\DateTimeInterface $upload_date): self
    {
        $this->upload_date = $upload_date;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getDuration(): ?int
    {
        return $this->duration;
    }

    public function setDuration(int $duration): self
    {
        $this->duration = $duration;

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

    public function getStatistic(): ?Statistics
    {
        return $this->statistic;
    }

    public function setStatistic(Statistics $statistic): self
    {
        // set the owning side of the relation if necessary
        if ($statistic->getVideo() !== $this) {
            $statistic->setVideo($this);
        }

        $this->statistic = $statistic;

        return $this;
    }

    public function getUploader(): ?Uploader
    {
        return $this->uploader;
    }

    public function setUploader(?Uploader $uploader): self
    {
        $this->uploader = $uploader;

        return $this;
    }

    /**
     * @return Collection|Subtitles[]
     */
    public function getSubtitles(): Collection
    {
        return $this->subtitles;
    }

    public function addSubtitle(Subtitles $subtitle): self
    {
        if (!$this->subtitles->contains($subtitle)) {
            $this->subtitles[] = $subtitle;
            $subtitle->setVideo($this);
        }

        return $this;
    }

    public function removeSubtitle(Subtitles $subtitle): self
    {
        if ($this->subtitles->removeElement($subtitle)) {
            // set the owning side to null (unless already changed)
            if ($subtitle->getVideo() === $this) {
                $subtitle->setVideo(null);
            }
        }

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
            $tag->addVideo($this);
        }

        return $this;
    }

    public function removeTag(Tags $tag): self
    {
        if ($this->tags->removeElement($tag)) {
            $tag->removeVideo($this);
        }

        return $this;
    }
}
