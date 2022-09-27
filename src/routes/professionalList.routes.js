const { Router } = require('express');
const { getAllProfessional, getProfessional } = require('../controllers/professionalList.controller')

const router = Router();

router.get('/search', getAllProfessional)

router.get('/search/10', getProfessional)

module.exports = router;