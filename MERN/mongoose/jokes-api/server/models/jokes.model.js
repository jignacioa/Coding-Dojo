const mongoose = require('mongoose') //need to import mongoose for Schema creation 


const JokeSchema = new mongoose.Schema ({
    setup: {
      type: String,
      required: [true, 'Where is the joke?'],
      minlength: [10, 'Joke must be at least 10 characters long!' ]

    },

    punchline: {
      type: String,
      required: [true, 'What is the punchline?'],
      minlength: [3, 'Punchline must be at least 3 characters long']
      
    }
  })

const Joke =  mongoose.model('joke', JokeSchema)

module.exports = Joke