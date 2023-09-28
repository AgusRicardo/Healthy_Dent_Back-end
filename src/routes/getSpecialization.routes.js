const { Router } = require('express');
const { getSpecialization } = require('../controllers/getSpecialization.controller');


const router = Router();

router.get('/specialization', getSpecialization)


module.exports = router;