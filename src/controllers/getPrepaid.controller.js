const pool = require('../db');

const getPrepaid = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT pr.prepaid_id
                                  ,pr."detail"
                                FROM "User" as u
                                INNER JOIN "Prepaid" as pr
                                ON pr.prepaid_id = u.prepaid_id
                                WHERE user_id = $1;`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "Prepaid no encontrada",
    })
  }
  res.json(result.rows[0]);
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
  getPrepaid
};