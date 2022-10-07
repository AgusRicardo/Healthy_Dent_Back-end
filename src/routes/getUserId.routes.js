const { Router } = require('express');
const { getUserId } = require('../controllers/getUserId.controller');


const router = Router();


router.get('/user/:id', getUserId)

module.exports = router;