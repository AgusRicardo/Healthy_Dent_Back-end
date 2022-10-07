const { check } = require('express-validator');
const pool = require('../db');

  const professionalExists = check('user_id').custom(async(value) => {
    const { rows } = await pool.query(`SELECT * 
                                      FROM "Professional"
                                      WHERE user_id = $1`, [value])
    if (rows.length) {
      throw new Error ('El profesional ya se encuentra registrado.')
    }
  })
  
  module.exports={
    professionalExists
  }