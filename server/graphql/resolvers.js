// Imports: Node Fetch
import fetch from 'node-fetch';


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Search for a film by ID
    getFilm: async (parent, args) => {
      const response = await 
      fetch(`https://swapi.co/api/films/${args.id}`);
      return response.json();
    }
  }
};


// Exports
export default RESOLVERS;