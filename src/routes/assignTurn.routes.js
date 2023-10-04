const { Router } = require('express');
const { check } = require('express-validator');
const { assignTurn } = require('../controllers/assignTurn.controller');

const router = Router();

router.put(
  '/assignturn',
  [
    check('user_id', 'El ID de usuario es obligatorio'),
    check('prof_id', 'El ID del profesional es obligatorio'),
    check('prepaid_id', 'El ID de prepago es obligatorio'),
    check('treatment', 'El tratamiento es obligatorio'),
    check('date', 'El día es obligatorio'),
    check('hour', 'La hora es obligatoria'),
  ],
  assignTurn
);

module.exports = router;
