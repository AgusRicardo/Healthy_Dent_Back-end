const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const {db} = require('./config')
const {join} = require('path')



const createUserRoutes = require('./routes/createUser.routes');
const createProfessional = require('./routes/createProfessional.routes');
const loginRoutes  = require('./routes/login.routes');
const logoutRoutes = require('./routes/logout.routes');
const professionalListRoutes = require('./routes/professionalList.routes');
const getUserId = require('./routes/getUserId.routes');
const createTurn = require('./routes/turn.routes')
const PORT = process.env.PORT; 

const app = express();


// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            
//     optionSuccessStatus:200
// }

// Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.static(join(__dirname, '../client/build')))
app.use(express.json());
app.use(cookieParser())
app.use(passport.initialize())


// Routes
app.use(createUserRoutes)
app.use(createProfessional)
app.use(loginRoutes)
app.use(logoutRoutes)
app.use(professionalListRoutes)
app.use(getUserId)
app.use(createTurn)


// Erros
app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
})

app.listen(PORT || 4000)

console.log("Host:", db.host)
console.log("User:", db.user)
console.log("Password:", db.password)
console.log("Port:", db.port)
console.log("DB_Port:", db.db_port)
console.log("Name:", db.database)
console.log("Secret:", db.secret)


db.port ?
console.log(`Server on ${PORT}`)
:
console.log(`Server on 4000`)