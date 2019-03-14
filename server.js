const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;
const express = require('express');
const {argv} = require('yargs');
const bodyParser = require('body-parser');

const { character } = require('./models/character.js');
const { alignement } = require('./models/alignement.js');
const { classe } = require('./models/classe.js')
const  { getCharacter, postCharacter, deleteCharacter, putCharacter } = require('./controller/characterController.js');



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
    let newAlignement = new alignement( {
        name: req.body.name,
        cite: req.body.cite,
        level: req.body.level
    });
    newAlignement.save().then( alignement => {
        res.send(alignement);
    }).catch((err) => {
        res.status(500).send(err);
    });
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
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send()
    }
    alignement.findByIdAndDelete(id).then((alignement) => {
        if (!alignement) {
            res.status(404).send()
        }
        res.send("deleted");
    }).catch((err) => {
        res.status(500).send()
    })
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
    const { id } = req.params;
    if (!ObjectID.isValid(id)) {
        res.status(400).send('invalid ID');
    } else {
        alignement.findByIdAndUpdate(id, { $set: req.body }).then(oldAlignement => {
            if (!oldAlignement) {
                res.status(404).send();
            } else {
                alignement.findById(id).then(newAlignement => {
                    res.json(newAlignement).send();
                })
            }
        }).catch(err => {
            res.status(500).send();
        });
    }
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
    alignement.find().then(listOfAlignement => {
        res.json(listOfAlignement)
    }).catch(err => {
        res.status(500).send()
    });
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

app.listen(3000, () => {
    console.log('Started on port 3000')
})
