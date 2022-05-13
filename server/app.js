const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const animalRoutes = require('./routes/animals')

const app = express();

app.use(cors('localhost'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


/* Implement your routes here */
app.use(animalRoutes);

module.exports = app;
