const { Router } = require('express');
const { createUser } = require('../controllers/createUser.controller');

const router = Router();

router.post('/register', createUser)

module.exports = router;