const mongoose = require("mongoose");
require("dotenv").config({path: './config/.env'});

mongoose.connect('mongodb+srv://'+process.env.DB_USER_PASS+'@cluster0.n62fpce.mongodb.net/flexitronic', {
    useNewurlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('connected to MongoDB'))
.catch((err) => console.log('Failled to connecct to MongoDB', err));
