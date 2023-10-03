const { Router } = require('express');
const { getMyPatient } = require('../controllers/getAllMyPatient.controller.js');
const router = Router();

router.get('/mypatient/:id', getMyPatient)

module.exports = router;