const pool = require('../db');

const getAllTurns = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`select tu.turn_id, tu.treatment, tu.date, tu.hour, u.name, u.last_name, tu.prof_id, tu.user_id  from "Turn" as tu
                                   inner join "User" as u 
                                   on tu.user_id = u.user_id
                                   where tu.prof_id =  $1 
                                   AND DATE(tu.date) = CURRENT_DATE;`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No hay turnos",
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
    getAllTurns
};