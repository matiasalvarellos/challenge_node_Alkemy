-- Creamos la DB
CREATE SCHEMA disney_db;

-- Seleccionamos la DB

USE disney_db;

-- Creamos la tabla CHARACTERS

CREATE TABLE characters(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  age VARCHAR(255) NOT NULL,
  weight VARCHAR(255) NOT NULL, 
  avatar VARCHAR(255) NOT NULL,
  history VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla MOVIES

CREATE TABLE movies(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  date_movie VARCHAR(255) NOT NULL,
  qualification int NOT NULL,
  genre_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla USERS

CREATE TABLE users(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla CHARACTER_MOVIES

CREATE TABLE character_movie(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  character_id INT UNSIGNED NOT NULL,
  movie_id INT UNSIGNED NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Creamos la tabla GENRES

CREATE TABLE genres(
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(200) NOT NULL
);

--
-- Inicia creación de FK
--

ALTER TABLE movies
ADD FOREIGN KEY (genre_id) REFERENCES genres(id);

ALTER TABLE character_movie
ADD FOREIGN KEY (character_id) REFERENCES characters(id),
ADD FOREIGN key (movie_id) REFERENCES movies(id);

--
-- Volcado de información
--

-- Tabla GENRES

INSERT INTO genres (`id`,`name`) VALUES (1,'fantasia'),(2,'ciencia ficcion'),(3,'aventura');

-- Tabla Characters

INSERT INTO characters (`id`, `name`, `age`, `weight`, `avatar`,`history`) VALUES 
(1, 'Aladdín', '16', '70kg','https://www.ultimasnoticias.ec/files/article_main/uploads/2017/07/12/59667b56c09cb.jpeg', 'Aladdín es un joven pobre que, junto con su mono Abú, se dedica a robar y engañar a la gente de Agrabah para poder sobrevivir.Él vive en una casa abandonada en el bazar de la ciudad donde tienen una amplia vista al palacio.' ), (2, 'Rey Skywalker', '15', '54kg','https://i.pinimg.com/564x/67/6b/2d/676b2da0a9de0517bc2e88d09fcff5f2.jpg','https://starwars.fandom.com/es/wiki/Rey_Skywalker#Biograf.C3.ADa'),(3, 'Luke Skywalker', '53', '80kg','https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/855/public/media/image/2019/10/luke-skywalker.jpg?itok=m9OuAPgn','https://starwars.fandom.com/es/wiki/Luke_Skywalker');

-- Tabla Movies

INSERT INTO movies (`id`,`title`,`image`,`date_movie`,`qualification`,`genre_id`) VALUES 
(1, 'Star Wars: Episodio VII - El despertar de la Fuerza', 'https://static.wikia.nocookie.net/esstarwars/images/2/2e/El_Despertar_de_la_Fuerza_Poster.jpg/revision/latest/scale-to-width-down/350?cb=20180412014438', '17 de diciembre de 2015', '10', 2),
(2, 'Star Wars: Episodio IX - El ascenso de Skywalker', 'https://static.wikia.nocookie.net/esstarwars/images/c/c4/EADSPosterFinal.jpg/revision/latest/scale-to-width-down/338?cb=20200212005458', '20 de diciembre de 2019','10',2),
(3, 'Aladdín', 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/EBC038D70FC34E4EBC849C16817DB1B26047B38E6E77A2C985CC73356BC879CA/scale?width=1200&aspectRatio=1.78&format=jpeg', '8 de noviembre de 1992', '10', 1);


-- Tabla character_movie


INSERT INTO character_movie (`character_id`, `movie_id`) VALUES 
(1, 3),(2,1),(2,2),(3,1),(3,2);
  