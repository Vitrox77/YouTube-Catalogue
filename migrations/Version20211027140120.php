<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211027140120 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE adresse (id INT AUTO_INCREMENT NOT NULL, entreprise_id_id INT DEFAULT NULL, ville VARCHAR(255) NOT NULL, departement VARCHAR(255) NOT NULL, code_postal INT NOT NULL, UNIQUE INDEX UNIQ_C35F0816DAC5BE2B (entreprise_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, entreprise_id_id INT NOT NULL, mail VARCHAR(255) NOT NULL, tel INT NOT NULL, INDEX IDX_4C62E638DAC5BE2B (entreprise_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE entreprise (id INT AUTO_INCREMENT NOT NULL, secteur_id INT DEFAULT NULL, nom VARCHAR(255) NOT NULL, site VARCHAR(255) DEFAULT NULL, INDEX IDX_D19FA609F7E4405 (secteur_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prise_contact (id INT AUTO_INCREMENT NOT NULL, entreprise_id_id INT NOT NULL, date_mailing DATE DEFAULT NULL, date_appel DATE DEFAULT NULL, retour VARCHAR(500) DEFAULT NULL, INDEX IDX_EAAF8CDAC5BE2B (entreprise_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE prospect (id INT AUTO_INCREMENT NOT NULL, retour_id_id INT DEFAULT NULL, etat VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_C9CE8C7D35A60577 (retour_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE secteur (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE adresse ADD CONSTRAINT FK_C35F0816DAC5BE2B FOREIGN KEY (entreprise_id_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE contact ADD CONSTRAINT FK_4C62E638DAC5BE2B FOREIGN KEY (entreprise_id_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE entreprise ADD CONSTRAINT FK_D19FA609F7E4405 FOREIGN KEY (secteur_id) REFERENCES secteur (id)');
        $this->addSql('ALTER TABLE prise_contact ADD CONSTRAINT FK_EAAF8CDAC5BE2B FOREIGN KEY (entreprise_id_id) REFERENCES entreprise (id)');
        $this->addSql('ALTER TABLE prospect ADD CONSTRAINT FK_C9CE8C7D35A60577 FOREIGN KEY (retour_id_id) REFERENCES prise_contact (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE adresse DROP FOREIGN KEY FK_C35F0816DAC5BE2B');
        $this->addSql('ALTER TABLE contact DROP FOREIGN KEY FK_4C62E638DAC5BE2B');
        $this->addSql('ALTER TABLE prise_contact DROP FOREIGN KEY FK_EAAF8CDAC5BE2B');
        $this->addSql('ALTER TABLE prospect DROP FOREIGN KEY FK_C9CE8C7D35A60577');
        $this->addSql('ALTER TABLE entreprise DROP FOREIGN KEY FK_D19FA609F7E4405');
        $this->addSql('DROP TABLE adresse');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE entreprise');
        $this->addSql('DROP TABLE prise_contact');
        $this->addSql('DROP TABLE prospect');
        $this->addSql('DROP TABLE secteur');
    }

    public function isTransactional(): bool{return false;}
}
