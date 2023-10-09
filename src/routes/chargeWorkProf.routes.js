const { Router } = require('express');
const { executeSP } = require('../controllers/chargeWorkProf.controller.js');
const router = Router();

router.post('/executesp/:id', executeSP)

module.exports = router;
