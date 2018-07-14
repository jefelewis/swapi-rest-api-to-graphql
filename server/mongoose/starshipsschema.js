// Imports: Mongoose
const MONGOOSE = require('mongoose');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const STARSHIPSCHEMA = new SCHEMA({

});


// Exports
module.exports = MONGOOSE.model('Starship', STARSHIPSCHEMA);