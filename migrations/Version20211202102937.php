<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211202102937 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE filters (id INT AUTO_INCREMENT NOT NULL, categoy_id INT DEFAULT NULL, min_likes INT DEFAULT NULL, max_likes INT DEFAULT NULL, min_views INT DEFAULT NULL, max_views INT DEFAULT NULL, min_dislikes INT DEFAULT NULL, max_dislikes INT DEFAULT NULL, min_duration INT DEFAULT NULL, max_duration INT DEFAULT NULL, min_upload_date DATE DEFAULT NULL, max_upload_date DATE DEFAULT NULL, has_subtitles TINYINT(1) DEFAULT NULL, has_age_limit TINYINT(1) DEFAULT NULL, keywords VARCHAR(255) DEFAULT NULL, INDEX IDX_7877678DE2729280 (categoy_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE filters_tags (filters_id INT NOT NULL, tags_id INT NOT NULL, INDEX IDX_6B46D28F6B715464 (filters_id), INDEX IDX_6B46D28F8D7B4FB4 (tags_id), PRIMARY KEY(filters_id, tags_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE filters ADD CONSTRAINT FK_7877678DE2729280 FOREIGN KEY (categoy_id) REFERENCES categories (id)');
        $this->addSql('ALTER TABLE filters_tags ADD CONSTRAINT FK_6B46D28F6B715464 FOREIGN KEY (filters_id) REFERENCES filters (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE filters_tags ADD CONSTRAINT FK_6B46D28F8D7B4FB4 FOREIGN KEY (tags_id) REFERENCES tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tags ADD is_tag_perso TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE video ADD download_date DATE NOT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE filters_tags DROP FOREIGN KEY FK_6B46D28F6B715464');
        $this->addSql('DROP TABLE filters');
        $this->addSql('DROP TABLE filters_tags');
        $this->addSql('ALTER TABLE tags DROP is_tag_perso');
        $this->addSql('ALTER TABLE video DROP download_date');
    }
}
