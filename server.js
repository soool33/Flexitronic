const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const UserModel = require('./models/user.model');
const ContactModel = require('./models/contact.model');
const {checkUser, requireAuth} = require('./middleware/auth.middleware');

require('./config/db');
require("dotenv").config({path: './config/.env'});

const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowedHeaders':['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false 
}
app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id)
});


//Routes
app.use('/api/user', userRoutes);



// Port du serveur
const port = process.env.PORT || 3030;
app.listen(port, () => {
    console.log("vous etes sur le port " + " " + port);
  });