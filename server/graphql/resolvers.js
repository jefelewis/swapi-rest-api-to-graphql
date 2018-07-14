// Imports: MongoDB Models/Schema
import FILMSCHEMA from '../mongoose/film';
import PERSONSCHEMA from '../mongoose/people';
import PLANETSCHMEA from '../mongoose/planet';
import SPECIESSCHEMA from '../mongoose/species';
import STARSHIPSCHEMA from '../mongoose/starship';
import VEHICLESCHEMA from '../mongoose/vehicle';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    film(parent, args) {
      return FILMSCHEMA.findById(args.id);
    },
    film() {
      return FILMSCHEMA.find();
    },
    person(parent, args) {
      return PERSONSCHEMA.findById(args.id)
    },
    persons() {
      return PERSONSCHEMA.find();
    },
    planet(parent, args) {
      return PLANETSCHMEA.findById(args.id);
    },
    planets() {
      return PLANETSCHMEA.find();
    },
    species(parent, args) {
      return SPECIESSCHEMA.findById(args.id)
    },
    specieses() {
      return SPECIESSCHEMA.find();
    },
    starship(parent, args) {
      return STARSHIPSCHEMA.findById(args.id)
    },
    starships() {
      return STARSHIPSCHEMA.find();
    },
    vehicle(parent, args) {
      return VEHICLESCHEMA.findById(args.id)
    },
    vehicles() {
      return VEHICLESCHEMA.find();
    }
  },
  Mutation: {

  }
}


// Exports
export default RESOLVERS;