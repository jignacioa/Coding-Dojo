const express = require('express'); //were setting express to requiring to equal the whole express lib. telling node to reach into node_models and find library

//CREATING OUR APP
const app = express(); // app is set to result of calling express 


//EXPRESS MIDDLEWARE - code that lives between req and res. allows us to do stuff to req or res
app.use(express.json()) //allows us to access JSON data(body of req) coming in, allows to see json data with any req 

//custom middleware 
/*function middleware(req,res,next) {
    console.log('in middleware');
    next();
}
//attaching middleware to every request 
app.use(middleware)

*/

require('./config/mongoose.config') // create connection to MongoDB  *at this same level inside config folder 

//require city routes file!  
const citiesRoutesFunc = require('./routes/city.routes')  //importing a function! YOURE NOT IMPORTING APP!
citiesRoutesFunc(app) // needs to take in the application! app is the argument, so here were invoking app from city.route

app.listen(8000, () => console.log('listening on 8000'))