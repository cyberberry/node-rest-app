const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userRoutes = require('./routes/user');

app.use('/user', jsonParser, userRoutes);

module.exports = app;