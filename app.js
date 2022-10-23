const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');

app.use('/user', jsonParser, userRoutes);
app.use('/category', jsonParser, categoryRoutes);

module.exports = app;