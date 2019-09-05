require('dotenv').config()

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const booksRouter = require('./routes/books');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Mongoose
mongoose.connect(process.env.DB_URL, { useNewUrlParser: true });


app.use('/api', indexRouter);
app.use('/api/books', booksRouter);


// Error Handler
app.use( (err, req, res, next) => {
	res.status(err.status || 500);
	res.json({ message: "Error Occured" });
});

module.exports = app;