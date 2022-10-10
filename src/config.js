const {config} = require('dotenv')

config()

module.exports = {
  db: {
    DB_USER: process.env.DB_USER, 
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    PORT: process.env.PORT,
    DB_PORT: process.env.DB_PORT,
    DB_NAME: process.env.DB_NAME,
    SECRET: process.env.SECRET_KEY
  } 
}