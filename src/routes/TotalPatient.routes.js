const { Router } = require('express');
const {getAllPatient} = require('../controllers/totalPatient.controller');

const router = Router();

router.get('/professional/totalPatient/:id', getAllPatient )

module.exports = router;