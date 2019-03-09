const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://oliviercrochet:mathéolecon@cluster0-3n0v9.gcp.mongodb.net/DofusAPI?retryWrites=true', { useNewUrlParser: true });

module.exports = {
    mongoose
}