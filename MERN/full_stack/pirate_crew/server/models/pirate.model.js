const mongoose = require('mongoose')

const PirateSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'Enter a name pirate!']
    },
    imageurl: {
        type: String,
        required: [true, 'Please put a picture, we want to see your face!']
    },
    chests: {
        type: Number,
        required: [true, 'How much gold do you have? Please enter an amount!']
    },
    phrase: {
        type: String, 
        required: [true, 'What is your catchphrase?']
    },
    position: {
        type: String,
        required: [true, 'Choose your position.']
    },
    peg: {
        type: Boolean,
        required: [true, 'Do you have a peg?']
    },
    patch: {
        type: Boolean,
        required: [true, 'Missing an eye?']
    },
    hook: {
        type: Boolean,
        required: [true, 'Missing a hand']
    }

}, {timestamps: true})

const Pirate = mongoose.model('pirate', PirateSchema)
module.exports = Pirate