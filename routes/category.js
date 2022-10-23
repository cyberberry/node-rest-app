const express = require('express');
const router = express.Router();

const database = require('../database');

router.post('/', (req, res) => {

  const category = {
    name: req.body.name,
    id: database.categories.length + 1
  };

  database.categories.push(category);

  res.status(201).json({
    category: category
  });

});

module.exports = router;