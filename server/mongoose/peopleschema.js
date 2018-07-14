// Imports: Mongoose
const MONGOOSE = require('mongoose');

// Imports: Mongoose Schemas
const FILMSCHEMA = require('./filmschema');
const SPECIESSCHEMA = require('./speciesschema');
const STARSHIPSCHEMA = require('./starshipsschema');
const VEHICLESCHEMA = require('./vehicleschema');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Author Schema
const PEOPLESCHEMA = new SCHEMA({
  name: {type: String, required: true},
  birth_year: {type: String, required: true},
  eye_color: {type: String, required: true},
  gender: {type: String, required: true},
  hair_color: {type: String, required: true},
  height: {type: String, required: true},
  mass: {type: String, required: true},
  skin_color: {type: String, required: true},
  homeworld: {type: String, required: true},
  films: {type: [FILMSCHEMA], required: true},
  species: {type: [SPECIESSCHEMA], required: true},
  starships: {type: [STARSHIPSCHEMA], required: true},
  vehicles: {type: [VEHICLESCHEMA], required: true},
  url: {type: String, required: true},
  created: {type: String, required: true},
  edited: {type: String, required: true}
});


// Exports
module.exports = MONGOOSE.model('People', PEOPLESCHEMA);