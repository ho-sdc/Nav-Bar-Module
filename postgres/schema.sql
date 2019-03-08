<<<<<<< HEAD
=======
CREATE DATABASE abibas_search IF NOT EXISTS;
>>>>>>> psql
\c abibas_search

DROP TABLE IF EXISTS products;

CREATE TABLE products (
<<<<<<< HEAD
	id INTEGER not null AUTO_INCREMENT PRIMARY_KEY,
=======
	id BIGSERIAL NOT NULL PRIMARY_KEY,
>>>>>>> psql
	keyword VARCHAR,
	item_name VARCHAR,
	category VARCHAR,
	stars: INTEGER,
	pictures: VARCHAR
);
