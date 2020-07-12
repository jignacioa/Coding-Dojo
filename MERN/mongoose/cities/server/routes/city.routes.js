//want to access all controller functions - import 
const citiesCtl = require('../controllers/city.controller') // citiesCtl will be an obj

//create a function - export it *we can export anything! 

//note similiarty to urls.py
//NOTE: WERE EXPORTING A FUNCTION 
//module.exports = is what the file exports so we're exporting the entire function 
module.exports = app => {
    app.get('/api/cities', citiesCtl.getAll)         //route can be the same path because the methods get/post are different!
    app.post('/api/cities', citiesCtl.createCity)  // the callback function gets fired a req is made to the route 
    app.get('/api/cities/:id', citiesCtl.getOne)
    app.delete('/api/cities/:id', citiesCtl.deleteOne)
    app.put('/api/cities/:id', citiesCtl.updateOne)
}

/* errors will show up as an main error object with another object called errors 
then inside that another object with the error field*/