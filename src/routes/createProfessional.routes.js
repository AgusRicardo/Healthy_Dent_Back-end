const { Router } = require('express');
const { check } = require('express-validator');
const { createProfessional } = require('../controllers/createProfessional.controller.');
const { professionalExists } = require('../validator/professionalExists');

const router = Router();

router.post(
  '/register/professional',[
    check('user_id'),
    check('n_matric', 'La matrícula es obligatoria'),
    check('specialization', 'La especialización es obligatoria')
  ],
  professionalExists,
  createProfessional)

module.exports = router;