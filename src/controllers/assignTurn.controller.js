const pool = require('../db');

const assignTurn = async (req, res, next) => {
  try {
    const { user_id, prof_id, prepaid_id, treatment, date, hour } = req.body;

    const result = await pool.query(
      `UPDATE "Turn" 
      SET user_id = $1
        , prepaid_id = $2
        , treatment = $3
        , availability = false
      WHERE prof_id = $4 
      AND date = $5
      AND hour = $6
      AND (availability = true OR availability IS NULL);`,
      [user_id, prepaid_id, treatment, prof_id, date, hour]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "No hay turnos disponibles para asignar.",
      });
    }

    res.status(200).json({
      message: "Turno asignado correctamente",
      assignedTurn: result.rows[0],
    });
  } catch (error) {
    next(error);
    return res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = {
    assignTurn,
};
