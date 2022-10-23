const express = require('express');
const router = express.Router();

const database = require('../database');

router.post('/', (req, res) => {

  const record = {
    id: database.records.length + 1,
    user_id: req.body.user_id,
    category_id: req.body.category_id,
    date: new Date(),
    sum: req.body.sum
  };

  database.records.push(record);

  res.status(201).json({
    record: record
  });

});

module.exports = router;