const pool = require('../db');

const createUser = async(req, res, next) => {
  const {user_id, name, last_name, dni, date_birth, address, gender, email, password, type_user} = req.body

  try {
    const result = await pool.query(`INSERT INTO "User" (user_id, dni, name, last_name, date_birth, address, gender, email, password, type_user)
                VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`, [
                  user_id,
                  dni,
                  name,
                  last_name,
                  date_birth,
                  address,
                  gender,
                  email,
                  password,
                  type_user
                ]);
    res.json(result.rows[0]);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser
}