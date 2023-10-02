const pool = require('../db');

const getAllProfessional = async (req, res, next) => {
  try {
    const allProfessional = await pool.query(`SELECT 
                                              CONCAT(name, ' ', last_name) AS name
                                              ,p.prof_id
                                              ,p.n_matric
                                              ,s.description 
                                              ,s.spe_id
                                            from "Professional" p 
                                            inner join "Specialization" s 
                                              on p.specialization = s.specialization
                                            inner join "User" u 
                                              ON u.user_id = p.user_id;
                                              `)
    res.json(allProfessional.rows)
  } catch (error) {
    next(error)
  }
};

const getProfessional = async (req, res) => {
  res.send('User ID ' + req.params.id)
  // const result = await pool.query('SELECT * FROM "User"');
  // res.json(result.rows[0].now);
};

module.exports = {
  getAllProfessional,
  getProfessional,
};
