//import express and body parser modules
const express = require('express');
const bodyParser = require ('body-parser');

//import models' methods
const  { getCharacter, postCharacter, deleteCharacter, putCharacter } = require('./controller/characterController.js');
const  { getAlignement, postAlignement, deleteAlignement, putAlignement } = require('./controller/alignementController.js');
const  { getClasse, postClasse, deleteClasse, putClasse } = require('./controller/classeController.js');

//get acces to express
const app = express();

//use bodyParser
app.use(bodyParser.json());


//CHARACTER METHOD

// GET ROUTE
app.get('/character', (req,res) =>{
    getCharacter(req,res)
});
// GETBYID ROUTE
app.get('/character/:id', (req,res) =>{
    getCharacter(req,res)
});

// POST ROUTE
app.post('/character', (req, res) => {
    postCharacter(req,res)
});

// DELETE ROUTE
app.delete('/character/:id', (req,res) => {
    deleteCharacter(req, res)
});

// PUT ROUTE
app.put('/character/:id', (req, res) => {
    putCharacter(req, res)
});


// CLASSE METHOD

// GET ROUTE
app.get('/classe', (req, res) => {
    getClasse(req, res)
});

// GETBYID ROUTE
app.get('/classe/:id', (req,res) =>{
    getClasse(req,res)
});

// POST ROUTE
app.post('/classe', (req, res) => {
    postClasse(req, res)
});

// DELETE ROUTE
app.delete('/classe/:id', (req,res) => {
    deleteClasse(req,res)
});

// PUT ROUTE
app.put('/classe/:id', (req, res) => {
    putClasse(req,res)
});


// ALIGNEMENT METHOD

// GET ROUTE
app.get('/alignement', (req, res) => {
    getAlignement(req,res)
});

// GETBYID ROUTE
app.get('/alignement/:id', (req,res) =>{
    getAlignement(req,res)
});

// POST ROUTE
app.post('/alignement', (req, res) => {
    postAlignement( req,res)
});

// DELETE ROUTE
app.delete('/alignement/:id', (req,res) => {
    deleteAlignement (req,res)
});

// PUT ROUTE
app.put('/alignement/:id', (req, res) => {
    putAlignement(req,res)
});

//expose express
module.exports = { app };