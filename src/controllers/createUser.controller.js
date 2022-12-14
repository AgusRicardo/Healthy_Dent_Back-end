const pool = require('../db');
const { validationResult } = require('express-validator')
const { hash } = require('bcryptjs')

const createUser = async(req, res, next) => {
  const {dni, name, last_name, date_birth, address_user, email_user, telephone, password, prepaid_id} = req.body

  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  try {
    const hanshedPassword = await hash(password, 10)

    const result = await pool.query(`INSERT INTO "User" (dni, name, last_name, date_birth, address_user, email_user, telephone, password, prepaid_id)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`, [
                  dni,
                  name,
                  last_name,
                  date_birth,
                  address_user,
                  email_user,
                  telephone,
                  hanshedPassword,
                  prepaid_id
                ]);
    res.status(201).json({
      success: true,
      message: "Se registró correctamente"
    });
    res.send('Usuario creado')
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser
}