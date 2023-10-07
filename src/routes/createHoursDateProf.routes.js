const { Router } = require('express');

const { createHourProf,createDateProf } = require('../controllers/createHorarios.controller');


const router = Router();

router.post(
  '/professional/createHours',createHourProf);
router.post(
    '/professional/createDay',createDateProf)
module.exports = router;