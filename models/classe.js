//import mongoose from mongoose.js
const { mongoose } = require('../db/mongoose.js');

//define Classe Model
const classe = mongoose.model('Class', {
    className: {
        type: String,
        required: true
    },
    spells: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

//expose Model
module.exports = {
    classe
}