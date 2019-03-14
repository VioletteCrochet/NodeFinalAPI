const { classe } = require('../models/classe.js')
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

function getClasse(req, res) {
    classe.find().then(classe => {
        res.send(classe)
    }).catch((err) => {
        res.status(500).send(err)
    })
};

function postClasse(req,res) {
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
};

function deleteClasse(req, res) {
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
};

function putClasse(req, res) {
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
}

module.exports ={
    getClasse,
    postClasse,
    deleteClasse,
    putClasse
}