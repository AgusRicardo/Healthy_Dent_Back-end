const pool = require('../db');
const { validationResult } = require('express-validator')


const createProfessional = async(req, res, next) => {
  const {user_id, n_matric, specialization} = req.body

  const errors = validationResult( req );

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array()
    });
  }

  try {

    const result = await pool.query(`INSERT INTO "Professional" (user_id, n_matric, specialization)
                VALUES ($1, $2, $3) RETURNING *`, [
                  user_id,
                  n_matric,
                  specialization
                ]);
    res.status(201).json({
      success: true,
      message: "Se registró correctamente"
    });
    res.send('Profesional creado correctamente')
    
  } catch (error) {
    next(error)
  }
};

module.exports = {
  createProfessional
}