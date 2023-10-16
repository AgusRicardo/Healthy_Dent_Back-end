const pool = require('../db');

const getAllDates = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT distinct(date)
	, prof_id
	, place_id
	, availability
	FROM "Turn"
WHERE prof_id = $1
	AND (availability = true OR availability IS NULL)
  AND date >= CURRENT_DATE
ORDER BY date ASC;`,[id])
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
    getAllDates
};