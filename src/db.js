const { Pool } = require('pg')
const {db} = require('./config')

const pool = new Pool({
  user: db.user,
  password: db.password,
  host: db.host,
  db_port: db.db_port,
  database: db.database,
  secret: db.secret
})

module.exports = pool;