const pool = require('../db');

const getUserId = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT * FROM "User" WHERE user_id = $1`,[id])

  if(result.rows.length === 0){
    return res.status(404).json({
      message: "Usuario no encontrado",
    })
  }
  res.json(result.rows[0]);
} catch (error) {
  next(error)
  return res.status(500).json({
    error: error.message,
  })
}

};


module.exports = {
  getUserId
};