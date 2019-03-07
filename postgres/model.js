const Sequelize = require('sequelize');
const connection = require('./index.js');

const Products = connection.define(
	'products',
	{
		id: {
			type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true
		},
		keyword: Sequelize.STRING,
		item_name: Sequelize.STRING,
		category: Sequelize.STRING,
		stars: Sequelize.INTEGER,
		pictures: Sequelize.STRING
	},
	{ timestamps: false }
);

connection.sync();

module.exports = Products;