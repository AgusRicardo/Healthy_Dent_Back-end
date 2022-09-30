const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const createUserRoutes = require('./routes/createUser.routes');
const professionalListRoutes = require('./routes/professionalList.routes');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use(createUserRoutes)
app.use(professionalListRoutes)

app.use((err, req, res, next) => {
  return res.json({
    message: err.message
  })
})

app.listen(4000)
console.log('Server on port 4000');