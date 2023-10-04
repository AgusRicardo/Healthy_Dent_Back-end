const pool = require('../db');

const getAllTurn = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT count(*) FROM "Turn" WHERE prof_id = $1`,[id])
  res.json(result.rows);
} catch (error) {
  next(error)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
    getAllTurn
};