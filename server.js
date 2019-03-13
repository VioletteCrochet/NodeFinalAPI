const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { character } = require('./models/character.js');
const { Classe } = require('./models/classe.js');
const { alignement } = require('./models/alignement.js');

const app = express();

app.use(bodyParser.json());

app.post('/character', (req, res) => {
    let newCharacter = new character( {
        name: req.body.name,
        classe: req.body.classe,
        level: req.body.level
    });
    newCharacter.save().then( character => {
        res.send(character);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.delete('/character/:id', (req,res) => {
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
});

app.put('/character/:id', (req, res) => {
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
});

app.get('/character', (req, res) => {
    character.find().then(listOfCharacter => {
        res.json(listOfCharacter)
    }).catch(err => {
        res.status(500).send()
    });
});

app.listen(3000, () => {
    console.log('Started on port 3000')
})
