const mongoose = require('mongoose')  //set const mongoose to requiring the whole mongoose library 

//set up mongoose.connect function - allows to connect to db 
mongoose.connect('mongodb://localhost/jokes', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

