const pool = require('../db');

const getAllHours = async (req, res, next) => {

try {
  const { prof_id, date } = req.body

  const result = await pool.query(`SELECT hour
	,place_id 
	,date
	,availability
	FROM "Turn" t
WHERE prof_id = $1 and t.date = $2
	AND (availability = true OR availability IS NULL)
ORDER BY hour asc;`,[prof_id, date])
  if(result.rows.length === 0){
    return res.json({
      message: "No hay horarios disponibles",
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
  getAllHours
};