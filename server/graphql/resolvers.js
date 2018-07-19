// Imports: Node Fetch
import axios from 'axios';

// GraphQL: Pagination
let pageNumber = 1;


// GraphQL: Resolvers
const RESOLVERS = {
  Query: {
    // Search for a Film by ID
    getFilmByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/films/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for all Films
    getAllFilms: (parent, args) => {
      return axios.get(`https://swapi.co/api/films/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Person by ID
    getPeopleByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/people/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for all People
    getAllPeople: (parent, args) => {
      return axios.get(`https://swapi.co/api/people/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Planet by ID
    getPlanetByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/planets/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Planet by ID
    getAllPlanets: (parent, args) => {
      return axios.get(`https://swapi.co/api/planets/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Species by ID
    getSpeciesByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/species/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for all Species
    getAllSpecies: (parent, args) => {
      return axios.get(`https://swapi.co/api/species/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Starship by ID
    getStarshipByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/starships/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for all Starships
    getAllStarships: (parent, args) => {
      return axios.get(`https://swapi.co/api/starships/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for a Vehicle by ID
    getVehicleByID: (parent, args) => {
      return axios.get(`https://swapi.co/api/vehicles/${args.id}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    },
    // Search for all vehicles
    getAllVehicles: (parent, args) => {
      return axios.get(`https://swapi.co/api/vehicles/?page=${pageNumber}`)
      .then(response => response.data)
      .catch((error) => console.log(error))
    }
  }
};


// Exports
export default RESOLVERS;