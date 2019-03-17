//import mongoose module
const mongoose = require('mongoose');
const {argv} = require('yargs');

// const user = require('../server.js').user;
// const password = require('../server.js').password;

const user = argv._[0];
const password = argv._[1];

//define use of promises
mongoose.Promise = global.Promise;

//define database connection
mongoose.connect(`mongodb+srv://${user}:${password}@cluster0-3n0v9.gcp.mongodb.net/dofusAPI?retryWrites=true`, { useNewUrlParser: true });

//expose module
module.exports = {
    mongoose
};