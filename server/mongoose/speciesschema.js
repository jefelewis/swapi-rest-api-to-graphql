// Imports: Mongoose
const MONGOOSE = require('mongoose');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const SPECIESSCHEMA = new SCHEMA({

});


// Exports
module.exports = MONGOOSE.model('Species', SPECIESSCHEMA);