//import  character model and mongoose
const { character } = require('../models/character.js')
const mongoose = require('mongoose');
//define access to mongoose.Types.ObjectId and its methods
const ObjectID = mongoose.Types.ObjectId;

//GET METHOD
function getCharacter(req, res) {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        character.find().then(character => {
            res.send(character)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }else {
        character.findById(id).then((character) => {
            if (!character) {
                res.status(404).send()
            }
            res.send(character);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }
};
// code à reproduire pour classe et alignement
// function getCharacter(req, res) {
//     const {id} = req.params;
//     if (!ObjectID.isValid(id)) {
//         character.find().then(character => {
//             res.send(character)
//         }).catch((err) => {
//             res.status(500).send(err)
//         });
//     }else {
//         character.findById(id).then((character) => {
//             if (!character) {
//                 res.status(404).send()
//             }
//             res.send(character);
//         }).catch((err) => {
//             res.status(500).send(err)
//         })
//     }
// };

//POST METHOD
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

//DELETE METHOD
function deleteCharacter(req, res) {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }
    character.findByIdAndDelete(id).then((character) => {
        if (!character) {
            res.status(404).send()
        }
        res.send('deleted');
    }).catch((err) => {
        res.status(500).send(err)
    })
};

//PUT METHOD
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

//EXPOSE METHODS
module.exports = {
    getCharacter,
    postCharacter,
    deleteCharacter,
    putCharacter
}

