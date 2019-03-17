//import mongoose from mongoose.js
const { mongoose } = require('../db/mongoose.js');

//define Character Model
const character = mongoose.model('Character', {
    name: {
        type: String,
        required: true
    },
    classe: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
    alignement: {
        type: String,
        default: "neutre"
    }
});

//expose Model
module.exports = {
    character
};