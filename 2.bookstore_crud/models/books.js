const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
		unique: true
	},
	author: {
		type: String,
		default: 'Anonymous'
	},
	rating: {
		type: Number,
		default: 1,
		max: 5
	},
	image: {
		type: String,
		default: 'https://bit.ly/2ktmT3b'
	}
}, {timestamps: true});

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;