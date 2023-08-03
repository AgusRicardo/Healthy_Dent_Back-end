const pool = require('../db');
const { validationResult } = require('express-validator')


const editProfile = async(req, res, next) => {
  const { validatedFields } = req;

  if (Object.keys(validatedFields).length === 0) {
    return res.status(400).json({ error: 'No se han proporcionado cambios válidos.' });
  }

  const userId = validatedFields.user_id;

  try {
    const hasUserFields = Object.keys(validatedFields).some(field => ['address_user', 'telephone', 'email_user'].includes(field));
    const hasProfessionalField = Object.keys(validatedFields).includes('specialization');

    if (hasUserFields && hasProfessionalField) {
      await Promise.all([
        updateUserFields(userId, validatedFields),
        updateProfessionalField(userId, validatedFields)
      ]);
    } else if (hasUserFields) {
      await updateUserFields(userId, validatedFields);
    } else if (hasProfessionalField) {
      await updateProfessionalField(userId, validatedFields);
    }

    return res.json({ message: 'Perfil actualizado exitosamente.' });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error);
    return res.status(500).json({ error: 'Error al actualizar el perfil.' });
  }
};

const updateUserFields = async (userId, fields) => {
  const columnsToUpdate = Object.keys(fields).filter(field => ['address_user', 'telephone', 'email_user'].includes(field));
  const values = columnsToUpdate.map(column => fields[column]);
  const updateUserQuery = `
    UPDATE "User"
    SET ${columnsToUpdate.map((column, index) => `"${column}" = $${index + 1}`).join(', ')}
    WHERE user_id = $${values.length + 1}
  `;

  const queryResult = await pool.query(updateUserQuery, [...values, userId]);
  return queryResult.rowCount;
};

const updateProfessionalField = async (userId, fields) => {
  if (fields['specialization'] === undefined) {
    return;
  }

  const updateProfessionalQuery = `
    UPDATE "Professional"
    SET "specialization" = $1
    WHERE user_id = $2
  `;

  const queryResult = await pool.query(updateProfessionalQuery, [fields['specialization'], userId]);
  return queryResult.rowCount;
};

module.exports = {
  editProfile
}