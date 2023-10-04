const pool = require('../db');

const getSpecialization = async (req, res, next) => {

try {

  const result = await pool.query(`select * from "Specialization" s`)

  if(result.rows.length === 0){
    return res.status(404).json({
      message: "Especialización no encontrada",
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
  getSpecialization
};