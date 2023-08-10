const pool = require('../db');

const getAllTurns = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`select * from "Turn"
                                   where prof_id = $1;`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No hay turnos",
    })
  }
  res.json(result.rows);
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
    getAllTurns
};