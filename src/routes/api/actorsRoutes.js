const express = require('express');
const router = express.Router();
const actorsController = require('../../controllers/api/actorsController');

router.get('/actors', actorsController.list);
router.get('/actors/detail/:id', actorsController.detail);
router.post('/actors/create', actorsController.create);
router.delete('/actors/delete/:id', actorsController.delete);

module.exports = router;