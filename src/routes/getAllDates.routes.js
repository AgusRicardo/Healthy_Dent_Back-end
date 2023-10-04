const { Router } = require('express');
const { getAllDates } = require('../controllers/getAllDates.controller.js');
const router = Router();

router.get('/profdates/:id', getAllDates)

module.exports = router;