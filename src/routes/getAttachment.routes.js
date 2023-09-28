const { Router } = require('express');
const { getAttachment } = require('../controllers/getAttachments.controller');


const router = Router();

router.get('/getAttachment/:id', getAttachment)


module.exports = router;