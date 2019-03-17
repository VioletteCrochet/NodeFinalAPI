//import classe model and mongoose
const { classe } = require('../models/classe.js')
const mongoose = require('mongoose');
//define acces to mongoose.Types.ObjectId and its methods
const ObjectID = mongoose.Types.ObjectId;

//GET METHOD
function getClasse(req, res) {
    const {id} = req.params;
    if (!ObjectID.isValid(id)) {
        classe.find().then(classe => {
            res.send(classe)
        }).catch((err) => {
            res.status(500).send(err)
        });
    }else {
        classe.findById(id).then((classe) => {
            if (!classe) {
                res.status(404).send()
            }
            res.send(classe);
        }).catch((err) => {
            res.status(500).send(err)
        })
    }
};

//POST METHOD
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

//DELETE METHOD
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

//PUT METHOD
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
};

//EXPOSE METHODS
module.exports ={
    getClasse,
    postClasse,
    deleteClasse,
    putClasse
};