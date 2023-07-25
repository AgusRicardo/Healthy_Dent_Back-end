const { Router } = require('express');
const {getProfileP} = require('../controllers/getProfileProfessional');

const router = Router();

router.get('/professional/profile/:id', getProfileP )

module.exports = router;