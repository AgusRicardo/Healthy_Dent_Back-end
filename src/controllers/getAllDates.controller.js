const pool = require('../db');

const getAllDates = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT prof_id
                                        , place_id
                                        , hour
                                        , date
                                        , availability
                                    FROM "Turn"
                                    WHERE prof_id = $1
                                    AND (availability = true OR availability IS NULL)`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No hay horarios disponibles",
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
    getAllDates
};