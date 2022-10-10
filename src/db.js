const { Pool } = require('pg')
const {db} = require('./config')

const pool = new Pool({
  user: db.DB_USER,
  password: db.DB_PASSWORD,
  host: db.DB_HOST,
  port: db.PORT,
  db_port: db.DB_PORT,
  name: db.DB_NAME,
  secret: db.SECRET
})

module.exports = pool;