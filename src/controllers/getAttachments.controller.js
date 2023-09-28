const pool = require('../db');

const getAttachment = async (req, res, next) => {

    try {
      const { id } = req.params
      
      const result = await pool.query(`SELECT * FROM "Attachments"
      WHERE id_manual = $1`,[id])
      if(result.rows.length === 0){
        return res.status(404).json({
          message: "No se encontro ningún archivo",
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
    getAttachment
};