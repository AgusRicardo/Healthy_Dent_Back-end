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
const PORT = process.env.PORT;

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  // origin:'https://healthydent.vercel.app',
  credentials: true,
  optionSuccessStatus: 200,
};

// Middlewares
app.use(morgan("dev"));
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

// Erros
app.use((err, req, res, next) => {
  return res.json({
    message: err.message,
  });
});

app.listen(PORT || 4000);

PORT ? console.log(`Server on ${PORT}`) : console.log(`Server on 4000`);
