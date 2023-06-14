const express = require('express');

const telegram = require('./telegram');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/telegram', telegram);

module.exports = router;
