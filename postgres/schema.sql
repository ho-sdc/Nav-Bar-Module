CREATE DATABASE abibas_search IF NOT EXISTS;
\c abibas_search

CREATE TABLE IF NOT EXISTS products (
	id BIGSERIAL NOT NULL PRIMARY_KEY,
	keyword VARCHAR,
	item_name VARCHAR,
	category VARCHAR,
	stars: INTEGER,
	pictures: VARCHAR
);
