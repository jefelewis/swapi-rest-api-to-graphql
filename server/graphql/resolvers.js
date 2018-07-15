// Imports: Node Fetch
import fetch from 'node-fetch';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Search for a Film by ID
    getFilm: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/films/${args.id}`);
      return response.json();
    },
    // Search for a Person by ID
    getPerson: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/people/${args.id}`);
      return response.json();
    },
    // Search for a Planet by ID
    getPlanet: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/planets/${args.id}`);
      return response.json();
    },
    // Search for a Species by ID
    getSpecies: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/species/${args.id}`);
      return response.json();
    },
    // Search for a Starship by ID
    getStarship: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/starships/${args.id}`);
      return response.json();
    },
    // Search for a Vehicle by ID
    getVehicle: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/vehicles/${args.id}`);
      return response.json();
    },
  }
};


// Exports
export default RESOLVERS;