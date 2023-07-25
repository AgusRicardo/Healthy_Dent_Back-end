const pool = require('../db');

const getProfileP = async (req, res, next) => {

try {
  const { id } = req.params
  
  const result = await pool.query(`
                                    select u.user_id, u.name, u.last_name, u.date_birth,u.telephone,u.address_user ,u.email_user, p.n_matric, p.specialization  
                                    from "User" as u 
                                    inner join "Professional" as p 
                                    on u.user_id = p.user_id
                                    where u.user_id = $1`,[id])
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
    getProfileP
};