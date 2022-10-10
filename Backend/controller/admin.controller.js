const PDF = require("../model/PDF")
const axios = require('axios')

module.exports = {
	getData: async (req, res, next) => {
		try {
			res.status(200).json(await PDF.find());
			//res.status(200).json(await Book.find());
		} catch (error) {
			res.status(500).json(error)
		}
	},
	getPDF: async (req, res, next) => {
		try {
			res.send('こんにちは　GetPDFPath です')
			//res.status(200).json(await Book.find());
		} catch (error) {
			res.status(500).json(error)
		}
	}
};
