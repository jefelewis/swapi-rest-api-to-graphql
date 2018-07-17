// Imports: Node Fetch
import fetch from 'node-fetch';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Search for a Film by ID
    getFilmByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/films/${args.id}`);
      return response.json();
    },
    // Search for all Films
    getAllFilms: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/films/`);
      return response.json();
    },
    // Search for a Person by ID
    getPeopleByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/people/${args.id}`);
      return response.json();
    },
    // Search for all People
    getAllPeople: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/people/`);
      return response.json();
    },
    // Search for a Planet by ID
    getPlanetByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/planets/${args.id}`);
      return response.json();
    },
    // Search for a Planet by ID
    getAllPlanets : async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/planets/${args.id}`);
      return response.json();
    },
    // Search for a Species by ID
    getSpeciesByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/species/${args.id}`);
      return response.json();
    },
    // Search for all Species
    getAllSpecies: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/species/`);
      return response.json();
    },
    // Search for a Starship by ID
    getStarshipByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/starships/${args.id}`);
      return response.json();
    },
    // Search for all Starships
    getAllStarships: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/starships/`);
      return response.json();
    },
    // Search for a Vehicle by ID
    getVehicleByID: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/vehicles/${args.id}`);
      return response.json();
    },
    // Search for all vehicles
    getAllVehicles: async (parent, args) => {
      const response = await
      fetch(`https://swapi.co/api/vehicles/`);
      return response.json();
    },
  }
};


// Exports
export default RESOLVERS;