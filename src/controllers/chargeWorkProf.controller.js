const pool = require('../db');

const executeSP = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`SELECT spInsertTurns($1);`,[id])
  if(result.rows.length === 0){
    return res.status(404).json({
      message: "No tienes pacientes aún",
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
    executeSP
};