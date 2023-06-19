const { Router } = require('express');
const { getLastUser } = require('../controllers/getProfessionalUserId.controller')

const router = Router();

router.get('/lastUserId', getLastUser)


module.exports = router;