const { Router } = require('express');
const { getPrepaid } = require('../controllers/getPrepaid.controller');



const router = Router();


router.get('/user/prepaid/:id', getPrepaid)

module.exports = router;