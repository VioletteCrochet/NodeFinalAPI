const { character } = require('./models/character.js')

function getCharacter(req, res) {
    character.find().then(character => {
        res.send(character)
    }).catch((err) => {
        res.status(500).send(err)
    })
};

module.exports ={
    getCharacter
}

