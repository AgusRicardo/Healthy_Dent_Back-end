const pool = require('../db');
const { validationResult } = require('express-validator')


const logoutUser = async(req, res, next) => {
  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }
  try {
    return res.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Se ha deslogueado correctamente.',
    })
  } catch (error) {
    next(error)
    return res.status(500).json({
      error: error.message,
    })
  }
}


module.exports = {
  logoutUser
}