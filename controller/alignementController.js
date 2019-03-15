const { alignement } = require('../models/alignement.js')
const mongoose = require('mongoose');
const ObjectID = mongoose.Types.ObjectId;

function postAlignement (req,res){ 
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
}

function deleteAlignement (req,res){
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
}

function putAlignement (req,res){
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
    
}

function getAlignement (req,res){
    alignement.find().then(listOfAlignement => {
        res.json(listOfAlignement)
    }).catch(err => {
        res.status(500).send()
    });

}


module.exports = {  
    getAlignement,
    putAlignement,
    deleteAlignement,
    postAlignement 
}
