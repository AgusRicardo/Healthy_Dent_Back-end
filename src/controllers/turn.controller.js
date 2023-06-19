const pool = require('../db');

const newTurn = async (req, res, next) => {


try {
  const { user_id, prof_id, prepaid_id, place_id, hour, date, treatment } = req.body
  
  const result = await pool.query(`INSERT INTO "Turn" (user_id, prof_id, prepaid_id, place_id, hour, date, treatment)
                                        VALUES ($1, $2, $3, $4, $5, $6, $7)`
                                      ,[
                                        user_id, 
                                        prof_id, 
                                        prepaid_id, 
                                        place_id, 
                                        hour, 
                                        date, 
                                        treatment
                                      ])

    res.status(201).json({
    success: true,
    message: "Se agendó tu turno correctamente"
    });
} catch (error) {
  next(error)
  console.log(error.message)
  return res.status(500).json({
    error: error.message,
  })
}

};


module.exports = {
    newTurn
};