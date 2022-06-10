# YouTube-Catalogue

### Comment faire fonctionner le projet ? (partie WEB)
- DL Git
- Composer install
- PHP en variable d'environnement (>7.0)
- En option (CLI Symfony)
- WAMP (pour avoir une bdd)
- php bin/console doctrine:database:create (créer la base)
- php bin/console doctrine:migrations:migrate (ou importer la bdd qui est dans le dossier public/files)


### Partie API
- Accéder à ce repository : (Repository Youtube-dl API)[https://github.com/GuillaumeDavy/Youtube-dl]
- Le télécharger (lire le READ ME de ce projet)
- Installer Docker
- Aller dans le fichier build_and_launch_docker.py
- Modifier le chemin de sotckage des vidéos et des infos
- Run ce fichier en admin avec python
