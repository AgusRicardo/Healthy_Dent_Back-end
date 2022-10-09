const { Router } = require('express');
const { newTurn } = require('../controllers/turn.controller');



const router = Router();


router.post('/turn', newTurn)

module.exports = router;