const { check } = require('express-validator');
const pool = require('../db');

  const profFieldsCheck = check('email_user').custom(async (value, { req }) => {
    const user = await pool.query(`SELECT user_id
                                    FROM "User"
                                    WHERE email_user = $1`, [value])
    const prof_user_id = user.rows[0].user_id

    const profExist = await pool.query(`SELECT * 
                                        FROM "Professional"
                                        WHERE user_id = $1`, [prof_user_id])
    if (!profExist.rows.length) {
    throw new Error('El profesional no existe.')
    }
    req.profExist = profExist.rows[0]
  })


  module.exports={
    profFieldsCheck,
  }