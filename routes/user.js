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

module.exports = router;