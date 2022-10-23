const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const recordRoutes = require('./routes/record');

app.use('/user', jsonParser, userRoutes);
app.use('/category', jsonParser, categoryRoutes);
app.use('/record', jsonParser, recordRoutes);

module.exports = app;