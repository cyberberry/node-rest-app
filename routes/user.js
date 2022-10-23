const express = require('express');
const router = express.Router();

const database = require('../database');

router.post('/', (req, res) => {

  const user = {
    name: req.body.name,
    id: database.users.length + 1
  };

  database.users.push(user);

  res.status(201).json({
    user: user
  });

});

router.get('/:id/records', (req, res) => {

  let records = database.records.filter(record => record.user_id == req.params.id);

  res.status(201).json({
    records: records
  });

});

router.get('/:userId/records/category/:categoryId', (req, res) => {

  let records = database.records.filter(record =>
    record.user_id == req.params.userId &&
    record.category_id == req.params.categoryId
  );

  res.status(201).json({
    records: records
  });

});

module.exports = router;