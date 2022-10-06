const { Router } = require('express');
const { logoutUser } = require('../controllers/logout.controller');
const { userAuth } = require('../middlewares/auth-middleware');



const router = Router();

router.get('/logout', logoutUser)

  module.exports = router;