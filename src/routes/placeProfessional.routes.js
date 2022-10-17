const { Router } = require('express');
const { placeProfessional } = require('../controllers/getPlaceProfessional.controller');


const router = Router();

router.get('/placeProfessional/:prof_id', placeProfessional)


module.exports = router;