const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { classe } = require('./models/classe.js')
const  { getCharacter, postCharacter, deleteCharacter, putCharacter } = require('./controller/characterController.js');


const app = express();

app.use(bodyParser.json()); 

app.get('/character', (req,res) =>{
    getCharacter(req,res)
});

app.post('/character', (req, res) => {
    const newCharacter = new character( {
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

app.post('/classe', (req, res) => {
    const newClasse = new classe( {
        className: req.body.className,
        spells: req.body.spells
    });
    newClasse.save().then( classe => {
        res.send(classe)
    }).catch((err) => {
        res.status(500).send(err)
    })
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
                }).catch(err => {                 
                    res.status(500).send();             
                });                
            }             
        }).catch(err => {                 
            res.status(500).send();             
        });         
    }     
});


app.listen(3000, () => {
    console.log('Started on port 3000')
});
