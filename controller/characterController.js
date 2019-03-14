const { character } = require('../models/character.js')
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

function getCharacter(req, res) {
    character.find().then(character => {
        res.send(character)
    }).catch((err) => {
        res.status(500).send(err)
    })
};
function postCharacter(req,res) {
    const newCharacter = new character( {
        name: req.body.name,
        classe: req.body.classe,
        level: req.body.level
    });
    newCharacter.save().then( character => {
        res.send(character);
    }).catch((err) => {
        res.status(500).send(err);
    })
};
function deleteCharacter(req, res) {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }
    character.findByIdAndDelete(id).then((character) => {
        if (!character) {
            res.status(404).send()
        }
        res.send("deleted");
    }).catch((err) => {
        res.status(500).send()
    })
};

function putCharacter(req, res) {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send('invalid ID');
    } else {
        character.findByIdAndUpdate(id, { $set: req.body }).then(oldCharacter => {
            if (!oldCharacter) {
                res.status(404).send();
            } else {
                character.findById(id).then(newCharacter => {
                    res.json(newCharacter).send();
                })
            }
        }).catch(err => {
            res.status(500).send();
        });
    }
}
module.exports ={
    getCharacter,
    postCharacter,
    deleteCharacter,
    putCharacter
}

