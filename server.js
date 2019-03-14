const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const inputPort = argv._[0]
const port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0)) ? inputPort : 3000;

const { character } = require('./models/character.js');
const { alignement } = require('./models/alignement.js');
const { classe } = require('./models/classe.js')
const  { getCharacter, postCharacter, deleteCharacter, putCharacter } = require('./controller/characterController.js');
const  { getAlignement, postAlignement, deleteAlignement, putAlignement } = require('./controller/alignementController.js');
const  { getClasse, postClasse, deleteClasse, putClasse } = require('./controller/classeController.js');


const app = express();

app.use(bodyParser.json()); 

app.get('/character', (req,res) =>{
    getCharacter(req,res)
});

app.post('/character', (req, res) => {
    postCharacter(req,res)
});

app.delete('/character/:id', (req,res) => {
    deleteCharacter(req, res)
});

app.put('/character/:id', (req, res) => {
    putCharacter(req, res)
});

// POST METHOD ALIGNEMENT
app.post('/alignement', (req, res) => {
    postAlignement( req,res)
});

// POST METHOD CLASSE
app.post('/classe', (req, res) => {
    let newClasse = new classe( {
        className: req.body.className,
        spells: req.body.spells,
        role: req.body.role
    });
    newClasse.save().then( classe => {
        res.send(classe);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// DELETE METHOD CHARACTER

// DELETE METHOD ALIGNEMENT
app.delete('/alignement/:id', (req,res) => {
    deleteAlignement (req,res)
    
});

// DELETE METHOD CLASSE
app.delete('/classe/:id', (req,res) => {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }
    classe.findByIdAndDelete(id).then((classe) => {
        if (!classe) {
            res.status(404).send()
        }
        res.send("deleted");
    }).catch((err) => {
        res.status(500).send()
    })
});

// PUT METHOD CHARACTER


// PUT METHOD ALIGNEMENT
app.put('/alignement/:id', (req, res) => {
    putAlignement(req,res)
});

// PUT METHOD CLASSE
app.put('/classe/:id', (req, res) => {
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send('invalid ID');
    } else {
        classe.findByIdAndUpdate(id, { $set: req.body }).then(oldClasse => {
            if (!oldClasse) {
                res.status(404).send();
            } else {
                classe.findById(id).then(newClasse => {
                    res.json(newClasse).send();
                })
            }
        }).catch(err => {
            res.status(500).send();
        });
    }
});

// GET METHOD CHARACTER
app.get('/character', (req, res) => {
    character.find().then(listOfCharacter => {
        res.json(listOfCharacter)
    }).catch(err => {
        res.status(500).send()
    });
});

// GET METHOD ALIGNEMENT
app.get('/alignement', (req, res) => {
    getAlignement(req,res)
});

// GET METHOD CLASSE
app.get('/classe', (req, res) => {
    classe.find().then(listOfClasse => {
        res.json(listOfClasse)
    }).catch(err => {
        res.status(500).send()
    });
});

// LISTEN

app.listen(port, () => {
    console.log('Started on port: ' + port )
})
