const { check } = require('express-validator');
const pool = require('../db');
const { compare } = require('bcryptjs')


  const loginFieldsCheck = check('email_user').custom(async (value, { req }) => {
    const user = await pool.query(`SELECT *
                                    FROM "User"
                                    WHERE email_user = $1`, [value])
    if (!user.rows.length) {
      throw new Error('El email no existe.')
    }

    const validPassword = await compare(req.body.password, user.rows[0].password)
    if (!validPassword) {
      throw new Error ('Password errónea.')
    }

    req.user = user.rows[0]
    
  })
  
  module.exports={
    loginFieldsCheck
  }