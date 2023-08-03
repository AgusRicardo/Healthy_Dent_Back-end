const { Router } = require('express');
const { editProfile } = require('../controllers/editProfile.controller');
const { emailExists } = require('../validator/emailExists');
const { validateAndProcessFields } = require('../middlewares/validateEditFields-middleware');

const router = Router();

router.put(
  '/editProfile',
  emailExists,
  validateAndProcessFields,
  editProfile
  );

module.exports = router;