const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://flexitronic:Flexitronic@cluster0.n62fpce.mongodb.net/flexitronic', {
    useNewurlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify: false
}).then(() => console.log('connected to MongoDB')).catch((err) => console.log('Failled to connecct to MongoDB', err));
