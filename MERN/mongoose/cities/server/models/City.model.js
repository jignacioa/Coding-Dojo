const mongoose = require('mongoose');  // need to import mongoose to create Schema 

const CitySchema = new mongoose.Schema({ //Schema is a class! and it is ONLY shape of doc., creating a new INSTANCE 
  name: {
    type: String, 
    required: [
        true,
        'Please provide a name!'
    ]
  },
  population: {
      type: Number,
      required: [
        true, 
        'Please provide a population!'
      ]
  },
  imageUrl: {
      type: String,
      required: [ 
          true,
          'Image URL is required!' 
      ]
  },
  nice: {
      type: Boolean
  }
}, {
    timestamps: true
});


//TURN SCHEMA INTO MODEL: model is how we interact with db, schema is just shape 
//invoke model function(name we want model to have, Schema!)
const City = mongoose.model('City', CitySchema) 


module.exports = City;  //the entire export of this file is going to be City model 