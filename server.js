//import agrv from yargs module and app from routes.js (aka express())
const {argv} = require('yargs');
const { app } = require('./routes.js')

//define port based on input args
const inputPort = argv._[0]
const port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0)) ? inputPort : 3000;

// Start app on desired port
app.listen(port, () => {
    console.log('Started on port: ' + port )
})
