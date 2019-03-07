const Sequelize = require('sequelize');

const connection = new Sequelize('abibas_search', 'postgres', 'root', {
	dialect: 'postgres'
});

connection
	.authenticate()
	.then(() => console.log('Connected to PostgreSQL'))
	.catch(() => console.log('Error connecting to the database'))

module.exports = connection;