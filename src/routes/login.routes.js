const { Router } = require('express');
const { loginUser } = require('../controllers/login.controller');
const { check } = require('express-validator');

const router = Router();

router.post(
  '/login',
  [
    check('email_user', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
  ],
  loginUser)

  module.exports = router;