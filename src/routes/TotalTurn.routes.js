const { Router } = require('express');
const {getAllTurn} = require('../controllers/totalTurn.controller');

const router = Router();

router.get('/professional/totalTurn/:id', getAllTurn )

module.exports = router;