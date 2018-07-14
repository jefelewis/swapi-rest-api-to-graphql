// Imports: Mongoose
const MONGOOSE = require('mongoose');

// Imports: Mongoose Schemas
const PEOPLESCHEMA = require('./peopleschema');
const FILMSCHEMA = require('./filmschema');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const SPECIESSCHEMA = new SCHEMA({
  name: {type: String, required: true},
  classification: {type: String, required: true},
  designation: {type: String, required: true},
  average_height: {type: String, required: true},
  average_lifespan: {type: String, required: true},
  eye_colors: {type: String, required: true},
  hair_colors: {type: String, required: true},
  skin_colors: {type: String, required: true},
  language: {type: String, required: true},
  homeworld: {type: String, required: true},
  people: {type: [PEOPLESCHEMA], required: true},
  films: {type: [FILMSCHEMA], required: true},
  url: {type: String, required: true},
  created: {type: String, required: true},
  edited: {type: String, required: true}
});


// Exports
module.exports = MONGOOSE.model('Species', SPECIESSCHEMA);