const mongoose = require('mongoose');
const {isEmail} = require('validator');


const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minLength: 3,
            maxLength: 55,
            trim: true
        },
        from: {
            type: String,
            required: true,
            validate: [isEmail],
            lowercase: true,
            trim: true,
        },
        subject: {
            type: String,
            required: true,
            minLength: 2,
            maxLength: 255,
        },
        text: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const ContactModel = mongoose.model("contact", contactSchema);
  
module.exports = ContactModel;