const express = require('express');
const bodyParser = require ('body-parser')

const  { getCharacter, postCharacter, deleteCharacter, putCharacter } = require('./controller/characterController.js');
const  { getAlignement, postAlignement, deleteAlignement, putAlignement } = require('./controller/alignementController.js');
const  { getClasse, postClasse, deleteClasse, putClasse } = require('./controller/classeController.js');

const app = express();

app.use(bodyParser.json()); 

app.get('/character', (req,res) =>{
    getCharacter(req,res)
});

app.get('/character/:id', (req,res) =>{
    getCharacter(req,res)
});
// code à reproduire pour classe et alignement
// app.get('/character/:id', (req,res) =>{
//     getCharacter(req,res)
// });

app.post('/character', (req, res) => {
    postCharacter(req,res)
});

// DELETE METHOD CHARACTER
app.delete('/character/:id', (req,res) => {
    deleteCharacter(req, res)
});

// PUT METHOD CHARACTER
app.put('/character/:id', (req, res) => {
    putCharacter(req, res)
});

// GET METHOD CLASSE
app.get('/classe', (req, res) => {
    getClasse(req, res)
});

// POST METHOD CLASSE
app.post('/classe', (req, res) => {
    postClasse(req, res)
});

// DELETE METHOD CLASSE
app.delete('/classe/:id', (req,res) => {
    deleteClasse(req,res)
});

// PUT METHOD CLASSE
app.put('/classe/:id', (req, res) => {
    putClasse(req,res)
});

// GET METHOD ALIGNEMENT
app.get('/alignement', (req, res) => {
    getAlignement(req,res)
});

// POST METHOD ALIGNEMENT
app.post('/alignement', (req, res) => {
    postAlignement( req,res)
});

// DELETE METHOD ALIGNEMENT
app.delete('/alignement/:id', (req,res) => {
    deleteAlignement (req,res)
});

// PUT METHOD ALIGNEMENT
app.put('/alignement/:id', (req, res) => {
    putAlignement(req,res)
});

module.exports = { app }