const {argv} = require('yargs');
const { app } = require('./routes.js')

const inputPort = argv._[0]
const port = (inputPort && !isNaN(inputPort) && (inputPort > 0 && inputPort % 1 === 0)) ? inputPort : 3000;

// LISTEN
app.listen(port, () => {
    console.log('Started on port: ' + port )
})
