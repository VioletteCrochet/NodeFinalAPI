const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { Character } = require('./models/user.js');
const { Classe } = require('./models/todo.js');

const app = express();

app.use(bodyParser.json());

app.post('/character', (req, res) => {
    let newCharacter = new Character( {
        name: req.body.name,
        classe: req.body.classe
    });
    newCharacter.save().then( character => {
        res.send(character);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.get('/character', (req,res) => {
    Todo.find().then(characters => {
        res.json(characters)
    }).catch((err) => {
        res.status(500).send(err);
    });
});

app.delete('/character/:id', (req,res) => { 
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(404).send()
    }
    Todo.findByIdAndDelete(id).then((character) => {
        if (!character) {
            res.status(404).send()
        }
        res.send(character, "deleted");
    }).catch((err) => {
        res.status(500).send()
    })
});

// app.put('/character/:id', (req,res) => { 
//     let newCharacter = new Character({
//         text: req.body.text
//     });
//     const {id} = req.params;
//     if (!ObjectID.isValid(id)) {
//         res.status(403).send()
//     }
//     Todo.findOneAndUpdate(id, newTodo).then((character) => {
//         if (!character) {
//             res.status(404).send()
//         }
//         console.log(text)
//         res.send(character);
//     }).catch((err) => {
//         res.status(500).send(err)
//     })
// });




app.listen(3000, () => {
    console.log('Started on port 3000')
})

