const Products = require('./model.js');

module.exports = {
	get: (req, res) => {
		let { keyword } = req.params;
		Products.findAll({
			where: {
				keyword: {
					$ilike: `%${keyword}%`
				}
			},
			limit: 4
		})
			.then(data => res.status(200).send(data))
			.catch(err => res.status(404).send(err))
	}
}