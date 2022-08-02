const express = require('express');
const router = express.Router();
const countriesController = require('../../controllers/api/countriesController');

router.get('/countries', countriesController.list);

module.exports = router;