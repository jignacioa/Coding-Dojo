// where our function are - allow us to interact with joke model - import joke model 

const Joke = require('../models/jokes.model')


function createJoke(req, res) {
    Joke.create(req.body)
      .then(createdJoke => res.json(createdJoke))
      .catch(err => res.json(err))

}

function getJokes(_req, res) {
    Joke.find()
      .then(allJokes => res.json(allJokes))
      .catch(err => res.json(err))
}

function singleJoke(req, res) {
    Joke.findOne({_id: req.params.id})
      .then(oneJoke => res.json(oneJoke))
      .catch(err => res.json(err))

}

function updateJoke(req, res) {
    Joke.findOne({_id: req.params.id})
      .then(joke => {joke.punchline = req.body.punchline 
       return joke.save()
    })
    .then(updatedJoke => res.json(updatedJoke))
    .catch(err => res.json(err))
}

function deleteJoke(req, res) {
  Joke.deleteOne({_id: req.params.id})
    .then(res.json({message: 'Deleted joke with id: ' + req.params.id}))
    .catch(err => res.json(err))
}

function randomJoke(req, res) {
  Joke.find()
  .then(jokes =>{
    const rand = Math.floor(Math.random()*jokes.length);
    res.json(jokes[rand])
  })
}


//export - wil be used by routes
module.exports = {
    createJoke,
    getJokes,
    singleJoke,
    updateJoke,
    deleteJoke,
    randomJoke
}

