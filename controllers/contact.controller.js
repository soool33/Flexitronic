const ContactModel = require('../models/contact.model');


module.exports.contact = async (req, res) => {
    
    
    const { from, name, subject, text} = req.body
    
    try {
        const contact = await ContactModel.create({ from, name, subject, text});
        res.status(201).json({contact: contact.name});
    } catch(err){
    res.status(200).send(err)
    }
}