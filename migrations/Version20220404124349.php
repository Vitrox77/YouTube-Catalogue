<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220404124349 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE filters DROP FOREIGN KEY FK_7877678DE2729280');
        $this->addSql('DROP INDEX IDX_7877678DE2729280 ON filters');
        $this->addSql('ALTER TABLE filters ADD category_id INT DEFAULT NULL, DROP categoy_id, DROP min_dislikes, DROP max_dislikes');
        $this->addSql('ALTER TABLE filters ADD CONSTRAINT FK_7877678D12469DE2 FOREIGN KEY (category_id) REFERENCES categories (id)');
        $this->addSql('CREATE INDEX IDX_7877678D12469DE2 ON filters (category_id)');
        $this->addSql('ALTER TABLE statistics ADD duration INT DEFAULT NULL, DROP nb_dislikes, DROP nb_coms');
        $this->addSql('ALTER TABLE video DROP upload_date, DROP duration');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE categories CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE filters DROP FOREIGN KEY FK_7877678D12469DE2');
        $this->addSql('DROP INDEX IDX_7877678D12469DE2 ON filters');
        $this->addSql('ALTER TABLE filters ADD min_dislikes INT DEFAULT NULL, ADD max_dislikes INT DEFAULT NULL, CHANGE keywords keywords VARCHAR(255) DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE category_id categoy_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE filters ADD CONSTRAINT FK_7877678DE2729280 FOREIGN KEY (categoy_id) REFERENCES categories (id)');
        $this->addSql('CREATE INDEX IDX_7877678DE2729280 ON filters (categoy_id)');
        $this->addSql('ALTER TABLE messenger_messages CHANGE body body LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE headers headers LONGTEXT NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE queue_name queue_name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE statistics ADD nb_coms INT DEFAULT NULL, CHANGE duration nb_dislikes INT DEFAULT NULL');
        $this->addSql('ALTER TABLE subtitles CHANGE language language VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE text text LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE tags CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE uploader CHANGE name name VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE channel_id channel_id VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE video ADD upload_date DATE NOT NULL, ADD duration INT NOT NULL, CHANGE title title VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE url url VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE thumbnail thumbnail VARCHAR(255) NOT NULL COLLATE `utf8mb4_unicode_ci`, CHANGE description description LONGTEXT DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
