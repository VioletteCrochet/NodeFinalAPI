const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { character } = require('./models/character.js');
const { Classe } = require('./models/classe.js');

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
        res.status(404).send()
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
app.put('/character/:id', (req, res) => {         
    const { id } = req.params;         
    const newName = req.body.name;
    const newClasse = req.body.classe;
    console.log(text);         
    if (!ObjectID.isValid(id)) {             
        res.status(404).send();         
    } else {            
        Todo.findByIdAndUpdate(id, { $set: { name: newName, classe: NewClasse } }).then(todo => {                
            if (!todo) {                     
                res.status(404).send();                 
            } else {                     
                res.json(todo).send();                
            }             
        }).catch(err => {                 
            res.status(500).send(err);             
        });         
    }     
});




app.listen(3000, () => {
    console.log('Started on port 3000')
})

