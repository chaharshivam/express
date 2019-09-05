const express = require('express');
const router = express.Router();
const Books = require('../models/books');

/* GET Books listing. */
router.get('/', (req, res, next) => {
	Books.find({}, (err, books) => {
		if (err) return next(err);

		res.json({ books });
	});
});

/* Add a Book */
router.post('/', (req, res, next) => {
	Books.create(req.body, (err, book) => {
		if (err) return next(err);

		res.status(200).json({ message: "Book added successfully" });
	});
});

/* Delete a Book */
router.delete('/:id', (req, res, next) => {
	Books.removeById(req.params.id, (err, book) => {
		if (err) return next(err);

		res.status(200).json({ message: "Book deleted successfully" });
	});
});

router.put('/:id', (req, res, next) => {
	Books.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
		if (err) return next(err);

		res.status(200).json({ message: "Book updated successfully" });
	});
});

module.exports = router;