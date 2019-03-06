const Sequelize = require('sequelize');

const connection = new Sequelize('abibas_search', 'postgres', 'root', {
	dialect: 'postgres'
});

connection
	.authenticate()
	.then(() => console.log('Connected to PostgreSQL'))
	.catch(() => console.log('Error connecting to the database'))

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

module.exports = connection;