// Imports: Mongoose
const MONGOOSE = require('mongoose');

// Imports: Mongoose Schemas
const PEOPLESCHEMA = require('./peopleschema');
const FILMSCHEMA = require('./filmschema');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const PLANETSCHEMA = new SCHEMA({
  name: {type: String, required: true},
  diameter: {type: String, required: true},
  rotation_period: {type: String, required: true},
  orbital_period: {type: String, required: true},
  gravity: {type: String, required: true},
  population: {type: String, required: true},
  climate: {type: String, required: true},
  terrain: {type: String, required: true},
  surface_water: {type: String, required: true},
  residents: {type: [PEOPLESCHEMA], required: true},
  films: {type: [FILMSCHEMA], required: true},
  url: {type: String, required: true},
  created: {type: String, required: true},
  edited: {type: String, required: true}
});


// Exports
module.exports = MONGOOSE.model('Planet', PLANETSCHEMA);