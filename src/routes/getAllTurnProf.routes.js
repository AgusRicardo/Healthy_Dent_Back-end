const { Router } = require('express');
const { getAllTurnsProf } = require('../controllers/getAllTurnsProf.controller');


const router = Router();

router.get('/allturnos/:id', getAllTurnsProf)


module.exports = router;