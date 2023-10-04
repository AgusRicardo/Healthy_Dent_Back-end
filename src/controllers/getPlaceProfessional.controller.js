const pool = require('../db');

const placeProfessional = async (req, res, next) => {

try {
  const { prof_id } = req.params
  
  const result = await pool.query(`SELECT * 
                                  FROM "PlaceProfessional"
                                  WHERE prof_id = $1;`
                                      ,[prof_id])
    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "No hay horarios con este profesional",
      })
    }
    res.json(result.rows)
} catch (error) {
  next(error)
  return res.status(500).json({
    error: error.message,
  })
}
};

module.exports = {
  placeProfessional,
  
};
