const { mongoose } = require('../db/mongoose.js');

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
})

module.exports = {
    character
}