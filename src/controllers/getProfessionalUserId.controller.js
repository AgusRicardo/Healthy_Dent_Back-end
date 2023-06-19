const pool = require('../db');

const getLastUser = async (req, res, next) => {
  try {
    const lastUser = await pool.query(`SELECT user_id
                                        FROM "User"
                                        ORDER BY user_id DESC
                                        LIMIT 1;
                                          `)
    res.json(lastUser.rows)
  } catch (error) {
    next(error)
  }
};


module.exports = {
  getLastUser
};