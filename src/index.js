const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const passport = require('passport')


const createUserRoutes = require('./routes/createUser.routes');
const professionalListRoutes = require('./routes/professionalList.routes');
const loginRoutes  = require('./routes/login.routes');
const logoutRoutes = require('./routes/logout.routes');

const app = express();

const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            
    optionSuccessStatus:200
}

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser())
app.use(passport.initialize())


// Routes
app.use(createUserRoutes)
app.use(loginRoutes)
app.use(professionalListRoutes)
app.use(logoutRoutes)


// Erros
app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
})

app.listen(4000)
console.log('Server on port 4000');