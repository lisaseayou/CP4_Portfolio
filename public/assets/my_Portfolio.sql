CREATE TABLE `projet` (
  `id` int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(128) NOT NULL,
  `description` varchar(500) NOT NULL,
  `image` varchar(255) NOT NULL,
  `year` int NOT NULL,
  `techno` varchar(250)
);

CREATE TABLE `profil` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `phone_number` varchar(255),
  `ville` varchar(255),
  `formation` varchar(255),
  `image_cv` varchar(255),
  `lien_github` varchar(255),
  `lien_linkedIn` varchar(255)
);
