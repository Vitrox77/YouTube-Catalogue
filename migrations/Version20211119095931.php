<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211119095931 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE categories (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE statistics (id INT AUTO_INCREMENT NOT NULL, video_id INT NOT NULL, nb_likes INT DEFAULT NULL, nb_dislikes INT DEFAULT NULL, nb_coms INT DEFAULT NULL, nb_views INT DEFAULT NULL, age_limit INT DEFAULT NULL, release_date DATE NOT NULL, UNIQUE INDEX UNIQ_E2D38B2229C1004E (video_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE subtitles (id INT AUTO_INCREMENT NOT NULL, video_id INT NOT NULL, language VARCHAR(255) NOT NULL, text LONGTEXT DEFAULT NULL, INDEX IDX_A739C98629C1004E (video_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tags (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tags_video (tags_id INT NOT NULL, video_id INT NOT NULL, INDEX IDX_17A32C748D7B4FB4 (tags_id), INDEX IDX_17A32C7429C1004E (video_id), PRIMARY KEY(tags_id, video_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE uploader (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, channel_id VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE video (id INT AUTO_INCREMENT NOT NULL, category_id INT NOT NULL, uploader_id INT NOT NULL, title VARCHAR(255) NOT NULL, url VARCHAR(255) NOT NULL, thumbnail VARCHAR(255) NOT NULL, upload_date DATE NOT NULL, description LONGTEXT DEFAULT NULL, duration INT NOT NULL, INDEX IDX_7CC7DA2C12469DE2 (category_id), INDEX IDX_7CC7DA2C16678C77 (uploader_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE statistics ADD CONSTRAINT FK_E2D38B2229C1004E FOREIGN KEY (video_id) REFERENCES video (id)');
        $this->addSql('ALTER TABLE subtitles ADD CONSTRAINT FK_A739C98629C1004E FOREIGN KEY (video_id) REFERENCES video (id)');
        $this->addSql('ALTER TABLE tags_video ADD CONSTRAINT FK_17A32C748D7B4FB4 FOREIGN KEY (tags_id) REFERENCES tags (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE tags_video ADD CONSTRAINT FK_17A32C7429C1004E FOREIGN KEY (video_id) REFERENCES video (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE video ADD CONSTRAINT FK_7CC7DA2C12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
        $this->addSql('ALTER TABLE video ADD CONSTRAINT FK_7CC7DA2C16678C77 FOREIGN KEY (uploader_id) REFERENCES uploader (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE video DROP FOREIGN KEY FK_7CC7DA2C12469DE2');
        $this->addSql('ALTER TABLE tags_video DROP FOREIGN KEY FK_17A32C748D7B4FB4');
        $this->addSql('ALTER TABLE video DROP FOREIGN KEY FK_7CC7DA2C16678C77');
        $this->addSql('ALTER TABLE statistics DROP FOREIGN KEY FK_E2D38B2229C1004E');
        $this->addSql('ALTER TABLE subtitles DROP FOREIGN KEY FK_A739C98629C1004E');
        $this->addSql('ALTER TABLE tags_video DROP FOREIGN KEY FK_17A32C7429C1004E');
        $this->addSql('DROP TABLE categories');
        $this->addSql('DROP TABLE statistics');
        $this->addSql('DROP TABLE subtitles');
        $this->addSql('DROP TABLE tags');
        $this->addSql('DROP TABLE tags_video');
        $this->addSql('DROP TABLE uploader');
        $this->addSql('DROP TABLE video');
    }
}
