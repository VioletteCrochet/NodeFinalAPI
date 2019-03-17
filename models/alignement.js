//import mongoose from mongoose.js
const { mongoose } = require('../db/mongoose.js');

//define Alignement Model
const alignement = mongoose.model('Alignement', {
    name: {
        type: String,
        required: true
    },
    cite: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        default: 1
    },
});

//expose Model
module.exports = {
    alignement
};