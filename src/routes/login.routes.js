const { Router } = require('express');
const { loginUser } = require('../controllers/login.controller');
const { check } = require('express-validator');
const { loginFieldsCheck } = require('../validator/loginFieldCheck');

const router = Router();

router.post(
  '/login',
  [
    check('email_user', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
  ],
  loginFieldsCheck,
  loginUser
  )

  module.exports = router;