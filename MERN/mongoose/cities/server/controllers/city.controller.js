//where well create all the functions that allow us to interact with city model
//import city model - need to go out one level 
const City = require('../models/City.model')

function createCity(req, res) {
  //this is like 'db.cities.insert()' to insert docs. - naming of collection: mongoose takes model name, turns to LC and tries to pluralize
  City.create(req.body) //this will return you a promise!
    .then(createdCity => res.json(createdCity))  //passing response back to client as json *createdCity and err can be given w/e name, 
    .catch(err => res.status(400).json(err));
}

// will return an array of all cities 
function getAll(req, res) {
    //like 'db.cities.find()'
   City.find()
   .then(cities => res.json(cities))
   .catch(error => res.json(error))
}

function getOne(req, res) {
  City.findById(req.params.id)
    .then(city => res.json(city))
    .catch(err => res.json(err))
}

function deleteOne(req, res) {
  City.findByIdAndDelete(req.params.id) //findById allows us to just pass the id
    .then(() => res.json({ status: 'Success'}))
    .catch(err => res.json(err))
}

function updateOne(req, res) {
  //const {name, population, imageUrl, nice} = req.body
  //platform shows findONe({_id: req.para.id})
  City.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      population: req.body.population,
      imageUrl: req.body.imageUrl,
      nice: req.body.nice
    },
    {
      new: true,
      runValidators: true
    }
    ) //findById allows us to just pass the id
    .then(updatedCity => res.json(updatedCity))
    .catch(err => res.status(400).json(err))
}

function randomCity(req, res) {
  City.find()
  .then(cities =>{
    const rand = Math.floor(Math.random()*cities.length);
    res.json(cities[rand])
  })
}

//exporting both functions in an object 
module.exports = {
    createCity,
    getAll,
    getOne,
    deleteOne,
    updateOne
}