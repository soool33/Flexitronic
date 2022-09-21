const mongoose = require('mongoose');



const userSchema = new mongoose.Schema(
    {
      pseudo: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 55,
        unique: true,
        trim: true
      },
      email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true,
      },
      password: {
        type: String,
        required: true,
        max: 1024,
        minlength: 6
      }
    },
    {
      timestamps: true,
    }
  );
  
  const UserModel = mongoose.model("user", userSchema);
  
  module.exports = UserModel;