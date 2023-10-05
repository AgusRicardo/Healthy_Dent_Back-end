const { Router } = require('express');
const { getAllHours } = require('../controllers/getAllHours.controller');
const router = Router();

router.post('/profhours', getAllHours)

module.exports = router;