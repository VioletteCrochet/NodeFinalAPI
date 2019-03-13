const { mongoose } = require('../db/mongoose.js');

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
})

module.exports = {
    alignement
}