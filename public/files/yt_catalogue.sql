-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : ven. 20 mai 2022 à 11:32
-- Version du serveur :  5.7.31
-- Version de PHP : 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `yt_catalogue`
--

-- --------------------------------------------------------

--
-- Structure de la table `categories`
--

DROP TABLE IF EXISTS `categories`;
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Film & Animation'),
(2, 'Autos & Vehicles'),
(3, 'Music'),
(4, 'Pets & Animals'),
(5, 'Sports'),
(6, 'Travel & Events'),
(7, 'Gaming'),
(8, 'People & Blogs'),
(9, 'Comedy'),
(10, 'Entertainment'),
(11, 'News & Politics'),
(12, 'Howto & Style'),
(13, 'Education'),
(14, 'Science & Technology'),
(15, 'Nonprofits & Activism');

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

DROP TABLE IF EXISTS `doctrine_migration_versions`;
CREATE TABLE IF NOT EXISTS `doctrine_migration_versions` (
  `version` varchar(191) COLLATE utf8_unicode_ci NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL,
  PRIMARY KEY (`version`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20211119095931', '2022-03-11 08:12:49', 417),
('DoctrineMigrations\\Version20211202102937', '2022-03-11 08:12:49', 211),
('DoctrineMigrations\\Version20220317141311', '2022-03-25 08:47:11', 134),
('DoctrineMigrations\\Version20220325090035', '2022-03-25 09:00:42', 216),
('DoctrineMigrations\\Version20220325124641', '2022-03-25 12:47:04', 188),
('DoctrineMigrations\\Version20220325125215', '2022-03-25 12:52:38', 66),
('DoctrineMigrations\\Version20220325125241', '2022-03-25 12:52:46', 50),
('DoctrineMigrations\\Version20220325131540', '2022-03-25 13:15:44', 96),
('DoctrineMigrations\\Version20220325133145', '2022-03-25 13:32:09', 64),
('DoctrineMigrations\\Version20220512101838', '2022-05-12 10:19:06', 116);

-- --------------------------------------------------------

--
-- Structure de la table `filters`
--

DROP TABLE IF EXISTS `filters`;
CREATE TABLE IF NOT EXISTS `filters` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) DEFAULT NULL,
  `min_likes` int(11) DEFAULT NULL,
  `max_likes` int(11) DEFAULT NULL,
  `min_views` int(11) DEFAULT NULL,
  `max_views` int(11) DEFAULT NULL,
  `min_duration` int(11) DEFAULT NULL,
  `max_duration` int(11) DEFAULT NULL,
  `min_upload_date` date DEFAULT NULL,
  `max_upload_date` date DEFAULT NULL,
  `has_subtitles` tinyint(1) DEFAULT NULL,
  `has_age_limit` tinyint(1) DEFAULT NULL,
  `keywords` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7877678D12469DE2` (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `filters`
--

INSERT INTO `filters` (`id`, `category_id`, `min_likes`, `max_likes`, `min_views`, `max_views`, `min_duration`, `max_duration`, `min_upload_date`, `max_upload_date`, `has_subtitles`, `has_age_limit`, `keywords`, `name`) VALUES
(9, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 'minecraft', '1');

-- --------------------------------------------------------

--
-- Structure de la table `statistics`
--

DROP TABLE IF EXISTS `statistics`;
CREATE TABLE IF NOT EXISTS `statistics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `nb_likes` int(11) DEFAULT NULL,
  `duration` int(11) DEFAULT NULL,
  `nb_views` int(11) DEFAULT NULL,
  `age_limit` int(11) DEFAULT NULL,
  `release_date` date NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_E2D38B2229C1004E` (`video_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `statistics`
--

INSERT INTO `statistics` (`id`, `video_id`, `nb_likes`, `duration`, `nb_views`, `age_limit`, `release_date`) VALUES
(1, 14, 1589, 2, 216959, 0, '2015-06-17'),
(2, 15, 226, 3, 42117, 0, '2020-05-13'),
(3, 16, 14436, 1, 635047, 0, '2020-12-22'),
(4, 17, 6, 3, 1953, 0, '2019-05-08'),
(5, 18, 57, 3, 371, 0, '2021-07-17');

-- --------------------------------------------------------

--
-- Structure de la table `subtitles`
--

DROP TABLE IF EXISTS `subtitles`;
CREATE TABLE IF NOT EXISTS `subtitles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `video_id` int(11) NOT NULL,
  `language` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `text` longtext COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`),
  KEY `IDX_A739C98629C1004E` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Structure de la table `tags`
--

DROP TABLE IF EXISTS `tags`;
CREATE TABLE IF NOT EXISTS `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_tag_perso` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tags`
--

INSERT INTO `tags` (`id`, `name`, `is_tag_perso`) VALUES
(1, 'SpongeBob SquarePants (TV Program)', 0),
(2, 'intro', 0),
(3, 'best', 0),
(4, 'a few moments later', 0),
(5, 'time', 0),
(6, 'spongebob time', 0),
(7, 'spongebob times', 0),
(8, 'HD', 0),
(9, 'Video', 0),
(10, 'Edit', 0),
(11, 'Sound', 0),
(12, 'Sounds', 0),
(13, 'Effect', 0),
(14, 'Effects', 0),
(15, 'Sound Effects', 0),
(16, 'Sound Effect', 0),
(17, 'A.B.S. Playz', 0),
(18, '2 Seconds Later...', 0),
(19, '2 Seconds Later Sound Effects', 0),
(20, '2 Seconds Later Sound Effect', 0),
(21, 'SpongeBob', 0),
(22, 'SpongeBob Time Card', 0),
(23, 'Time Card', 0),
(24, 'SpongeBob Narator', 0),
(25, 'SpongeBob Narator Time Card', 0),
(26, 'red', 0),
(27, 'redkill', 0),
(28, 'redkill24', 0),
(29, 'défi', 0),
(30, 'challenge', 0),
(31, 'fun', 0),
(32, 'drole', 0),
(33, 'marrante', 0),
(34, 'minecraft', 0),
(35, 'roblox', 0),
(36, 'france', 0),
(37, 'fr', 0),
(38, 'multigaming', 0),
(39, 'troll', 0),
(40, 'vidéo s\'arrête', 0),
(41, 'vidéo arrête', 0),
(42, 'vidéo stop', 0),
(43, 'la vidéo s\'arrête', 0),
(44, 'Rouge', 0),
(45, 'défis', 0),
(46, 'red défis', 0),
(47, '1 seconde', 0);

-- --------------------------------------------------------

--
-- Structure de la table `tags_video`
--

DROP TABLE IF EXISTS `tags_video`;
CREATE TABLE IF NOT EXISTS `tags_video` (
  `tags_id` int(11) NOT NULL,
  `video_id` int(11) NOT NULL,
  PRIMARY KEY (`tags_id`,`video_id`),
  KEY `IDX_17A32C748D7B4FB4` (`tags_id`),
  KEY `IDX_17A32C7429C1004E` (`video_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `tags_video`
--

INSERT INTO `tags_video` (`tags_id`, `video_id`) VALUES
(1, 14),
(2, 14),
(3, 14),
(4, 14),
(5, 14),
(6, 14),
(7, 14),
(8, 14),
(9, 14),
(9, 16),
(10, 14),
(11, 15),
(12, 15),
(13, 15),
(14, 15),
(15, 15),
(16, 15),
(17, 15),
(18, 15),
(19, 15),
(20, 15),
(21, 15),
(22, 15),
(23, 15),
(24, 15),
(25, 15),
(26, 16),
(27, 16),
(28, 16),
(29, 16),
(30, 16),
(31, 16),
(32, 16),
(33, 16),
(34, 16),
(35, 16),
(36, 16),
(37, 16),
(38, 16),
(39, 16),
(40, 16),
(41, 16),
(42, 16),
(43, 16),
(44, 16),
(45, 16),
(46, 16),
(47, 16);

-- --------------------------------------------------------

--
-- Structure de la table `uploader`
--

DROP TABLE IF EXISTS `uploader`;
CREATE TABLE IF NOT EXISTS `uploader` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `channel_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6796 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `uploader`
--

INSERT INTO `uploader` (`id`, `name`, `channel_id`) VALUES
(6791, 'Falende.Tv', 'UCu05CQbyq4JBfnT-eZeIY8A'),
(6792, 'A.B.S. Playz', 'UCwaFb9EzgYsmwl4UFoVPDOg'),
(6793, 'RED Défis', 'UCNgpDJgyiP87BQx-i_8yTrA'),
(6794, 'City of Glasgow College', 'CofGCollege'),
(6795, '·..ᴊᴜsᴛ_ᴀᴏɪ﹣ 🍙', 'UCYj13K8GHpTaTkyhPzEDWaA');

-- --------------------------------------------------------

--
-- Structure de la table `video`
--

DROP TABLE IF EXISTS `video`;
CREATE TABLE IF NOT EXISTS `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category_id` int(11) NOT NULL,
  `uploader_id` int(11) NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `thumbnail` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci,
  `download_date` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `IDX_7CC7DA2C12469DE2` (`category_id`),
  KEY `IDX_7CC7DA2C16678C77` (`uploader_id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Déchargement des données de la table `video`
--

INSERT INTO `video` (`id`, `category_id`, `uploader_id`, `title`, `url`, `thumbnail`, `description`, `download_date`) VALUES
(14, 8, 6791, 'A Few Moments Later HD 2 Seconds Video', 'c0ruHxX7r3M', 'https://i.ytimg.com/vi_webp/c0ruHxX7r3M/maxresdefault.webp', 'A Few Moments Later HD 2 Seconds Video\n\n\n╔═╦╗╔╦╗╔═╦═╦╦╦╦╗╔═╗ \n║╚╣║║║╚╣╚╣╔╣╔╣║╚╣═╣ \n╠╗║╚╝║║╠╗║╚╣║║║║║═╣ \n╚═╩══╩═╩═╩═╩╝╚╩═╩═╝', '2022-03-25'),
(15, 10, 6792, '2 Seconds Later... Sound Effect (From SpongeBob Time Card)', 'J7cZdwtYudc', 'https://i.ytimg.com/vi_webp/J7cZdwtYudc/maxresdefault.webp', 'Visit Our Playlists:\nhttps://www.youtube.com/playlist?list=PLCDERvCtbY7kb9XT_HLKLmpliun4Uk-MX\n\nhttps://www.youtube.com/playlist?list=PLCDERvCtbY7muynN2Y8L9zQbw0mTX5hBV\n\nhttps://www.youtube.com/playlist?list=PLCDERvCtbY7nFcntutzIaeiybOABsVNvb\n\nhttps://www.youtube.com/playlist?list=PLCDERvCtbY7mPKP_C-MlTGx9ivygBbIbT\n\nhttps://www.youtube.com/playlist?list\n\nWatch Previous Video:\nhttps://youtu.be/l62yyGRGlM0\n\nWatch This Unlisted Video:\nhttps://youtu.be/V8ms9ENESG8 \n\nSubscribe Now:\nhttps://m.youtube.com/channel/UCwaFb9EzgYsmwl4UFoVPDOg \n\nVisit us on Facebook:\nhttps://www.facebook.com/abs.playz \n\nVisit us on Twitter:\nhttps://twitter.com/ABSPLAYZ1?s=09 \n\nSubscribe Now!', '2022-04-01'),
(16, 10, 6793, 'SI LA VIDÉO DURE 1 SECONDE LA VIDÉO S\'ARRÊTE', 'jjs27jXL0Zs', 'https://i.ytimg.com/vi_webp/jjs27jXL0Zs/maxresdefault.webp', 'Si tu as aimé la vidéo, pense à mettre un pouce bleu 👍\n❤ ABONNE TOI et Active la CLOCHE !\n\n▶️ Plus de défis:\nTous les défis : https://www.youtube.com/watch?v=_pZML-9gxOw&list=PLgwONuI5lm7Gwy-vrJfW83yCDSelZtfPx\nGoogle : https://www.youtube.com/watch?v=M4rr3oUpCyI&list=PLgwONuI5lm7GmhFOi3BAGOqI-BRoHZ22B\nYoutube : https://www.youtube.com/watch?v=HJRnVgEpe-Y&list=PLgwONuI5lm7EzAiGj5j_QsuqXe1WkUi7m\nMinecraft : https://www.youtube.com/watch?v=_pZML-9gxOw&list=PLgwONuI5lm7FSnwqJx4-s5TIZE3kq5E4W\nRoblox : https://www.youtube.com/watch?v=J4AI8zw5ftQ&list=PLgwONuI5lm7Gy5-x-njzpOsDm9B1dKYsg\n\n😏 ME SUIVRE : \nTwitter : https://twitter.com/RedKill24\nTwitch : https://twitch.tv/redkill24\nInstagram : https://instagram.com/redkill.yt\nTikTok : @redkill.yt\nCode créateur EPIC : redkill24\n\n💎 Deviens MEMBRE de la chaine : https://bit.ly/2F8EhUK \n\nMusique d\'outro : \"The Party Troll\"\nMusic by D1ofAquavibe https://www.youtube.com/user/D1ofAquavibe\navailable at: https://www.d1ofaquavibe.com/music (as well as Apple Music, Google Play, Spotify, etc.)', '2022-04-15'),
(17, 13, 6794, 'Carousel Video 3sec', '0AyhUXw_zSY', 'https://i.ytimg.com/vi_webp/0AyhUXw_zSY/maxresdefault.webp', '', '2022-04-15'),
(18, 8, 6795, 'J\'ai fait 2h de dessin pour 3sec de vidéo ;^; bref sinon vous avez le droit d\'en créer de nouveaux 🌚', 'XkDijfjmDjc', 'https://i.ytimg.com/vi_webp/XkDijfjmDjc/maxresdefault.webp', '', '2022-04-15');

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `filters`
--
ALTER TABLE `filters`
  ADD CONSTRAINT `FK_7877678D12469DE2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Contraintes pour la table `statistics`
--
ALTER TABLE `statistics`
  ADD CONSTRAINT `FK_E2D38B2229C1004E` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`);

--
-- Contraintes pour la table `subtitles`
--
ALTER TABLE `subtitles`
  ADD CONSTRAINT `FK_A739C98629C1004E` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`);

--
-- Contraintes pour la table `tags_video`
--
ALTER TABLE `tags_video`
  ADD CONSTRAINT `FK_17A32C7429C1004E` FOREIGN KEY (`video_id`) REFERENCES `video` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_17A32C748D7B4FB4` FOREIGN KEY (`tags_id`) REFERENCES `tags` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `video`
--
ALTER TABLE `video`
  ADD CONSTRAINT `FK_7CC7DA2C12469DE2` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  ADD CONSTRAINT `FK_7CC7DA2C16678C77` FOREIGN KEY (`uploader_id`) REFERENCES `uploader` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
