const express = require('express');
const app = express();
require("dotenv").config({path: './config/.env'});

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log("vous etes sur le port " + " " + port);
  });