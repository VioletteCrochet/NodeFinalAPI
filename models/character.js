const { mongoose } = require('./db/mongoose.js');
const { className } = require('./classe')

const character = mongoose.model('Character', {
    name: {
        type: String,
        required: true
    },
    classe: {
        type: className,
        required: true
    },
    level: {
        type: number,
        default: 1
    },
})

module.exports = {
    character
}