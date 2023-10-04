const pool = require('../db');

const getMyPatient = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT DISTINCT(u.dni), CONCAT(u.name, ' ', u.last_name) AS name FROM "Turn" t
                                   INNER JOIN "User" u
                                   ON u.user_id = t.user_id
                                   WHERE t.prof_id = $1`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No tienes pacientes aún",
    })
  }
  res.json(result.rows);
} catch (error) {
  next(error)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
    getMyPatient
};