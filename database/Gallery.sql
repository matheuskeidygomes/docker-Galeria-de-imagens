-- --------------------------------------------------------
-- Servidor:                     127.0.0.1
-- Versão do servidor:           8.0.25 - MySQL Community Server - GPL
-- OS do Servidor:               Win64
-- HeidiSQL Versão:              11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Copiando estrutura do banco de dados para gallery
CREATE DATABASE IF NOT EXISTS `gallery` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `gallery`;

-- Copiando estrutura para tabela gallery.images
CREATE TABLE IF NOT EXISTS `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `image` varchar(50) DEFAULT NULL,
  `imageTitle` varchar(50) DEFAULT NULL,
  `path` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb3;

-- Copiando dados para a tabela gallery.images: ~0 rows (aproximadamente)
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` (`id`, `image`, `imageTitle`, `path`) VALUES
	(6, '716f590dc928edf80a62161c32cc932d.jpg', 'Razer Wallpaper', 'files/716f590dc928edf80a62161c32cc932d.jpg'),
	(8, 'fb8b0fdfe0988abdead53de4d8cc5e7f.jpg', 'Siamés Wallpaper', 'files/fb8b0fdfe0988abdead53de4d8cc5e7f.jpg'),
	(10, 'bf440aba72f36a7e00b4f1871fc3f715.jpg', 'Razer Wallpaper 2', 'files/bf440aba72f36a7e00b4f1871fc3f715.jpg'),
	(12, '505b91afe3da94a50d1140d758a7fb1d.jpg', 'Pokémon Wallpaper', 'files/505b91afe3da94a50d1140d758a7fb1d.jpg'),
	(13, 'da816d430bd4f2413803fac0322426b4.jpg', 'Gyarados Wallpaper', 'files/da816d430bd4f2413803fac0322426b4.jpg'),
	(14, 'e707be47432e3eb448dd30229bd04ef5.jpg', 'Spiderman Wallpaper', 'files/e707be47432e3eb448dd30229bd04ef5.jpg');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
