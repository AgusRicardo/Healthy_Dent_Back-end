const pool = require('../db');
const { validationResult } = require('express-validator')


const createHourProf = async(req, res, next) => {
  const {hour_start,hour_end,prof_id} = req.body
 
 try {
    
    const result = await pool.query(`INSERT INTO "Prof_hours" (hour_start, hour_end,prof_id)
                VALUES ($1, $2, $3) `, [
                  hour_start,
                  hour_end,
                  prof_id
                ]);
    res.status(201).json({
      success: true,
      message: "Horas cargadas correctamente"
    });
    res.send('Horas cargadas correctamente')
    
  } catch (error) {
    next(error)
  }
};
const createDateProf = async(req, res, next) => {
  const {day_start,day_end,prof_id} = req.body

  try {

    const result = await pool.query(`INSERT INTO "Prof_day" (day_start, day_end,prof_id)
                VALUES ($1, $2, $3) `, [
                  day_start,
                  day_end,
                  prof_id
                ]);
    res.status(201).json({
      success: true,
      message: "Dias cargadas correctamente"
    });
    res.send('Dias cargadas correctamente')
    
  } catch (error) {
    next(error)
  }
};
module.exports = {
  createHourProf,
  createDateProf
}