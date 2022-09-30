const { Router } = require('express');
const { createUser } = require('../controllers/createUser.controller');
const { check } = require('express-validator');

const router = Router();

router.post(
  '/register',
  [
    check('email_user', 'El email es obligatorio').isEmail(),
    check('password', 'El password debe tener como mínimo 6 caracteres').isLength({ min: 6 }),
    check('dni', 'El dni es obligatorio').isNumeric()
  ] 
  , 
  createUser)

module.exports = router;