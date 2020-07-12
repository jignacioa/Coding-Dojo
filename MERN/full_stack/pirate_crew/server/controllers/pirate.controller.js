
const Pirate = require('../models/pirate.model')

function createPirate(req, res) {
    Pirate.create(req.body)
      .then(newPirate => res.json(newPirate))
      .catch(err => res.status(400).json(err))
}

function allPirates(req, res) {
    Pirate.find()
      .then(pirates => res.json(pirates))
      .catch(err => res.json(err))
}

function onePirate(req, res) {
    Pirate.findById(req.params.id)
      .then(pirate => res.json(pirate))
      .catch(err => res.json(err))
}

function deletePirate(req, res) {
    Pirate.findByIdAndDelete(req.params.id)
      .then(() => res.json({status: 'Pirate has been deleted'}))
      .catch(err => res.json(err))
}

module.exports = {
    createPirate,
    allPirates,
    deletePirate,
    onePirate
}
