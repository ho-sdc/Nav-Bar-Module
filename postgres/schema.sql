\c abibas_search

DROP TABLE IF EXISTS products;

CREATE TABLE products (
	id INTEGER not null AUTO_INCREMENT PRIMARY_KEY,
	keyword VARCHAR,
	item_name VARCHAR,
	category VARCHAR,
	stars: INTEGER,
	pictures: VARCHAR
);
