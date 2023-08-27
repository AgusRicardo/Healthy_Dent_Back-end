const { Router } = require('express');
const { createUser } = require('../controllers/createUser.controller');
const { check } = require('express-validator');
const { emailExists } = require('../validator/emailExists');

const router = Router();

router.post(
  '/register',
  [
    check('email_user', 'El email es obligatorio').isEmail(),
    check('password', 'La contraseña debe tener como mínimo 6 caracteres').isLength({ min: 6 }).withMessage('La contraseña debe tener como mínimo 6 caracteres'),
    check('dni', 'El dni es obligatorio').isNumeric()
  ] 
  , 
  emailExists,
  createUser)

module.exports = router;