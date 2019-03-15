//import mongoose module
const mongoose = require('mongoose');

//define use of promises
mongoose.Promise = global.Promise;
//define database connection
mongoose.connect('mongodb+srv://oliviercrochet:mathéolecon@cluster0-3n0v9.gcp.mongodb.net/dofusAPI?retryWrites=true', { useNewUrlParser: true });

//expose module
module.exports = {
    mongoose
}