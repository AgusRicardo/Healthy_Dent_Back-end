const pool = require('../db');

const getAllProfessional = async (req, res, next) => {
  try {
    const allProfessional = await pool.query(`SELECT 
                                                name
                                                ,p.prof_id
                                                ,last_name
                                                ,n_matric
                                                ,specialization
                                              FROM "User" as u
                                              INNER JOIN "Professional" as p
                                              ON u.user_id = p.user_id;
                                              `)
    res.json(allProfessional.rows)
  } catch (error) {
    next(error)
  }
};

const getProfessional = async (req, res) => {
  const result = await pool.query('SELECT * FROM "User"');
  res.json(result.rows[0].now);
};

module.exports = {
  getAllProfessional,
  getProfessional,
};
