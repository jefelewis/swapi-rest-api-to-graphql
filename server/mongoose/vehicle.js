// Imports: Mongoose
const MONGOOSE = require('mongoose');

// Imports: Mongoose Schemas
const FILMSCHEMA = require('./film');
const PERSONSCHEMA = require('./person');


// Mongoose: Schema
const SCHEMA = MONGOOSE.Schema;

// Mongoose: Book Schema
const VEHICLESCHEMA = new SCHEMA({
  name: {type: String, required: true},
  model: {type: String, required: true},
  vehicle_class: {type: String, required: true},
  manufacturer: {type: String, required: true},
  length: {type: String, required: true},
  cost_in_credits: {type: String, required: true},
  crew: {type: String, required: true},
  passengers: {type: String, required: true},
  max_atmosphering_speed: {type: String, required: true},
  cargo_capacity: {type: String, required: true},
  consumables: {type: String, required: true},
  films: {type: [FILMSCHEMA], required: true},
  pilots: {type: [PERSONSCHEMA], required: true},
  url: {type: String, required: true},
  created: {type: String, required: true},
  edited: {type: String, required: true}
  
});


// Exports
module.exports = MONGOOSE.model('Vehicle', VEHICLESCHEMA);