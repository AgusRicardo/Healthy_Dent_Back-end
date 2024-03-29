const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const passport = require("passport");
const { db } = require("./config.js");
const { join } = require("path");
const createUserRoutes = require("./routes/createUser.routes");
const createProfessional = require("./routes/createProfessional.routes");
const loginRoutes = require("./routes/login.routes");
const logoutRoutes = require("./routes/logout.routes");
const professionalListRoutes = require("./routes/professionalList.routes");
const getUserId = require("./routes/getUserId.routes");
const createTurn = require("./routes/turn.routes");
const getPrepaid = require("./routes/getPrepaid.routes");
const getTurn = require("./routes/getTurn.routes");
const getPlaceProf = require("./routes/placeProfessional.routes");
const loginProfessional = require("./routes/loginProfessional.routes.js");
const getProfileProfessional = require('./routes/getProfileProfessional.routes.js');
const totalPatient = require('./routes/TotalPatient.routes.js');
const totalTurn = require('./routes/TotalTurn.routes.js');
const editProfile = require('./routes/editProfile.routes.js');
const PORT = process.env.PORT;
const getAgenda = require('./routes/getAgenda.routes.js');
const getAllTurnsProf = require('./routes/getAllTurnProf.routes.js');
const getLastUserId = require('./routes/getProfessionalUserId.routes.js');
const getAttachment = require('./routes/getAttachment.routes.js');
const getSpecialization = require('./routes/getSpecialization.routes.js');
const getAllMyPatient = require('./routes/getAllMyPatient.routes.js');
const getAllDates =  require('./routes/getAllDates.routes.js');
const assignTurn = require('./routes/assignTurn.routes.js');
const getAllHours = require('./routes/getAllHours.routes.js');
const createHoursDateProf=require('./routes/createHoursDateProf.routes.js')
const executeSP = require('./routes/chargeWorkProf.routes.js');
const app = express();

const corsOptions = {
  //origin: "http://localhost:3000",
  origin:'https://healthydent.vercel.app',
  credentials: true,
  optionSuccessStatus: 200,
};

// Middlewares
app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Routes
app.use(createUserRoutes);
app.use(createProfessional);
app.use(loginRoutes);
app.use(logoutRoutes);
app.use(professionalListRoutes);
app.use(getUserId);
app.use(createTurn);
app.use(getPrepaid);
app.use(getTurn);
app.use(getPlaceProf);
app.use(loginProfessional);
app.use(getProfileProfessional);
app.use(totalPatient);
app.use(totalTurn);
app.use(editProfile);
app.use(getAgenda);
app.use(getAllTurnsProf);
app.use(getLastUserId);
app.use(getAttachment);
app.use(getSpecialization);
app.use(getAllMyPatient);
app.use(getAllDates);
app.use(assignTurn);
app.use(getAllHours);
app.use(createHoursDateProf);
app.use(executeSP);

// Erros
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT || 4000);

PORT ? console.log(`Server on ${PORT}`) : console.log(`Server on 4000`);
