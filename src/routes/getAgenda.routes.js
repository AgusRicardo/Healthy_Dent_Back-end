const { Router } = require('express');
const { getAgenda } = require('../controllers/getAgenda.controller');


const router = Router();

router.get('/calendar/:id', getAgenda)


module.exports = router;