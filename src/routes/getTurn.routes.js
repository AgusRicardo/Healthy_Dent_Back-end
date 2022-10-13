const { Router } = require('express');
const { getListTurn } = require('../controllers/getListTurn.controller');


const router = Router();

router.get('/list/turn/:id', getListTurn)


module.exports = router;