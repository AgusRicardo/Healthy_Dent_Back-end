const { Router } = require('express');
const { loginProfessional } = require('../controllers/loginProfessional.controller');
const { check } = require('express-validator');
const { loginFieldsCheck } = require('../validator/loginFieldCheck');
const { profFieldsCheck } = require('../validator/professionalFieldCheck');

const router = Router();

router.post(
  '/loginProfessional',
  [
    check('email_user', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
  ],
  loginFieldsCheck,
  profFieldsCheck,
  loginProfessional
  )

  module.exports = router;