const { Products, regex} = require('./index.js');

module.exports = {
	get: (req, res) => {
		let { keyword } = req.params;
		const actualRegex = regex(keyword);
		Products.find({ keyword: actualRegex })
		.limit(4)
		.then(data => res.send(data))
		.catch(err => console.log(err));
	}
}