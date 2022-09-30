const pool = require('../db');

const loginUser = async(req, res, next) => {
  const {email_user, password} = req.body

  const errors = validationResult( req );
  
  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.mapped()
    });
  }
  
  try {
    const result = await pool.query(`SELECT email_user
                                        ,password 
                                      FROM "User"
                                      WHERE email_user = 'agustin@gmail.com'
                                      AND password = 'central4415'
                                      `, [
                  email_user,
                  password
                ]);
    res.status(201).json(result.rows[0]);

  } catch (error) {
    next(error)
  }
};

module.exports = {
  createUser
}
