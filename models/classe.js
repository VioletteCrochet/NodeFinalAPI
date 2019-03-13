const { mongoose } = require('../db/mongoose.js');

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

module.exports = {
    classe
}