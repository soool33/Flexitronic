const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const userRoutes = require('./routes/user.routes');
const nodemailer = require("nodemailer");
const UserModel = require('./models/user.model')
const ContactModel = require('./models/contact.model');
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
app.post("/api/user/contact", (req, res) => {
  "use strict";

  async function main() {
    var transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      // service: "gmail",
      auth: {
        user: "32a1a9513355f9",
        pass: "5c37fd405c32a9",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });
    const { from, name, subject, text} = req.body
    var mailOptions = {
      from: req.body.from,
      to: "contact@flexitronic.com",
      name: req.body.name,
      subject: req.body.subject,
      text: req.body.text,
    };
    let info = await transporter.sendMail(mailOptions);

    console.log("les options: ", mailOptions, info.response);
    const contact = await ContactModel.create({ from, name, subject, text});
    res.status(201).json({contact: contact.name});
    return contact;
    
  }
  main().catch(console.error);
});



// Port du serveur
app.listen(port, () => {
    console.log("vous etes sur le port " + " " + port);
  });