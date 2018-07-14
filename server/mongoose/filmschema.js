// Imports: Mongoose
const MONGOOSE = require('mongoose');

// Imports: Mongoose Schemas
const SPECIESSCHEMA = require('./speciesschema');
const STARSHIPSCHEMA = require('./starshipsschema');
const VEHICLESCHEMA = require('./vehicleschema');
const PEOPLESCHEMA = require('./peopleschema');
const PLANETSCHEMA = require('./planetschema');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const FILMSCHEMA = new SCHEMA({
  title: {type: String, required: true},
  episode_id: {type: Number, required: true},
  opening_crawl: {type: String, required: true},
  director: {type: String, required: true},
  producer: {type: String, required: true},
  release_date: {type: Date, required: true},
  species: {type: [SPECIESSCHEMA], required: true},
  starships: {type: [STARSHIPSCHEMA], required: true},
  vehicles: {type: [VEHICLESCHEMA], required: true},
  characters: {type: [PEOPLESCHEMA], required: true},
  planets: {type: [PLANETSCHEMA], required: true},
  url: {type: String, required: true},
  created: {type: String, required: true},
  edited: {type: String, required: true}
});


// Exports
module.exports = MONGOOSE.model('Film', FILMSCHEMA);