//requiring mongoose library - set it to mongoose const
const mongoose = require('mongoose');



//invoke .connect from mongoose library 
mongoose.connect('mongodb://localhost/cities', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
})  //doesn't actually have to be localhost 
//connection string: mongodb connection to localhost/db_name