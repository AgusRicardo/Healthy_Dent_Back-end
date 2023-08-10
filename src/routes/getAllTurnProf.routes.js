const { Router } = require('express');
const { getAllTurns } = require('../controllers/getAllTurnsProf.controller');


const router = Router();

router.get('/allturnos/:id', getAllTurns)


module.exports = router;