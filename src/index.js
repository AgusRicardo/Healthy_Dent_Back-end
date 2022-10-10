const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const {db} = require('./config')


const createUserRoutes = require('./routes/createUser.routes');
const createProfessional = require('./routes/createProfessional.routes');
const loginRoutes  = require('./routes/login.routes');
const logoutRoutes = require('./routes/logout.routes');
const professionalListRoutes = require('./routes/professionalList.routes');
const getUserId = require('./routes/getUserId.routes');
const createTurn = require('./routes/turn.routes')

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
// app.use(express.static('./client/public'))
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

app.get('/', (req, res) => res.send('Esto anda?'))

// Erros
app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
})

app.listen(db.port || 4000)


db.port ?
console.log(`Server on ${db.port}`)
:
console.log(`Server on 4000`)