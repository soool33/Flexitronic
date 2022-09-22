const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./routes/user.routes');
const UserModel = require('./models/user.model')
const {checkUser, requireAuth} = require('./middleware/auth.middleware');

require('./config/db');
require("dotenv").config({path: './config/.env'});

const port = process.env.PORT || 3030;


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
app.listen(port, () => {
    console.log("vous etes sur le port " + " " + port);
  });