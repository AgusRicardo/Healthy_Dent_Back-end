const pool = require('../db');
const { validationResult } = require('express-validator')

const validateAndProcessFields = (req, res, next) => {
  const { user_id, address_user, telephone, email_user, specialization } = req.body;

  const errors = validationResult( req );
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  if (!user_id && !address_user && !telephone && !email_user && !specialization) {
    return res.status(400).json({ error: 'No se han realizado cambios' });
  }

  const changes = {};
  if (user_id !== undefined) {
    changes.user_id = user_id;
  }
  if (address_user !== undefined) {
    changes.address_user = address_user;
  }
  if (telephone !== undefined) {
    changes.telephone = telephone;
  }
  if (email_user !== undefined) {
    changes.email_user = email_user;
  }
  if (specialization !== undefined) {
    changes.specialization = specialization;
  }

  req.validatedFields = changes;
  next();

};

module.exports={
  validateAndProcessFields
}