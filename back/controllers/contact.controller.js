const ContactModel = require('../models/contact.model');
const nodemailer = require("nodemailer");
require("dotenv").config({path: '../config/.env'});
const ObjectId = require('mongoose').Types.ObjectId;

// envoie mail + enregistrement bdd
module.exports.contact = async (req, res) => {
    var transporter = nodemailer.createTransport({
        host: "pro2.mail.ovh.net",
        port: 587,
        requireTLS: true,
        secure: false,
        //service: "outlook365",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_SECRET,
        },
        //debug: true,
        //logger:true,
         tls: {
        //     rejectUnauthorized: true,
             //ciphers:'SSLv3'
         },
    });
    
    const { from, name, subject, text} = req.body
    let a = "exm1@gmail.com"
    let b = "exm2@gmail.com"
    let c = a + "," + b
    console.log(c);

    let mails = ["samyberrahou@gmail.com","quentin.valenti@flexitronic.fr"]

    let result = "";

    for (let i = 0; i < mails.length; i++) {
    result += mails[i] + ",";
    }

result = result.slice(0, -1);

console.log(result)
    
    var mailOptions = {
        from: "quentin.valenti@flexitronic.fr",
        to: result,
        name: req.body.name,
        subject: req.body.subject,
        text: req.body.text,
    };
    
    try {
        let info = await transporter.sendMail(mailOptions);
    } catch (err){
        console.log("mail erreure : ",err);
    }

    //console.log("les options: ", mailOptions, info.response);
    const contact = await ContactModel.create({ from, name, subject, text});
    res.status(201).json({contact: contact.name});
    return contact;
}

module.exports.messages = async (req, res) => {
    const messages = await ContactModel.find().select();
    res.status(200).json(messages);
}

module.exports.message = (req, res) => {
    console.log(req.params);
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('ID inconnu : ' + req.params.id)

    ContactModel.findById(req.params.id, (err, docs) => {
        if (!err) res.send(docs);
        else console.log('ID inconnu : ' + err);
    }).select();
}

module.exports.deleteMessage = async (req, res) => {
    if (!ObjectId.isValid(req.params.id))
    return res.status(400).send('Cet utilisateur n\'existe pas : ' + req.params.id);

    try{
        // deleteOne instead of remove (deprecated)
        await ContactModel.deleteOne({ _id: req.params.id }).exec();
        res.status(200).json({ message: "Message supprimé avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
}