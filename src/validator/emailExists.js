const { check } = require('express-validator');
const pool = require('../db');

  const emailExists = check('email_user').custom(async(value) => {
    const { rows } = await pool.query(`SELECT * 
                                      FROM "User"
                                      WHERE email_user = $1`, [value])
    if (rows.length) {
      throw new Error ('El email ya se encuentra registrado.')
    }
  })
  
  module.exports={
    emailExists
  }