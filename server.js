const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const UserModel = require('./models/user.model')

require('./config/db');
require("dotenv").config({path: './config/.env'});

const port = process.env.PORT || 3030;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//Routes
app.use('/api/user', userRoutes);



// Port du serveur
app.listen(port, () => {
    console.log("vous etes sur le port " + " " + port);
  });