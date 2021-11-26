<?php

namespace App\Entity;

use App\Repository\UploaderRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Core\Annotation\ApiResource;


/**
 * @ORM\Entity(repositoryClass=UploaderRepository::class)
 * @ApiResource
 */
class Uploader
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
     * @ORM\Column(type="string", length=255)
     */
    private $channel_id;

    /**
     * @ORM\OneToMany(targetEntity=Video::class, mappedBy="uploader", orphanRemoval=true)
     */
    private $video;

    public function __construct()
    {
        $this->video = new ArrayCollection();
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

    public function getChannelId(): ?string
    {
        return $this->channel_id;
    }

    public function setChannelId(string $channel_id): self
    {
        $this->channel_id = $channel_id;

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
            $videoId->setUploader($this);
        }

        return $this;
    }

    public function removeVideo(Video $videoId): self
    {
        if ($this->video->removeElement($videoId)) {
            // set the owning side to null (unless already changed)
            if ($videoId->getUploader() === $this) {
                $videoId->setUploader(null);
            }
        }

        return $this;
    }
}
