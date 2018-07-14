// Imports: GraphQL Resolvers
import RESOLVERS from './resolvers';


// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {

  }

  type Mutation {
  }

  type Film {
    id: ID!
    title: String!
    episode_id: Int!
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    species: [Species]
    starships: [Starship]
    vehicles: [Vehicle]
    characters: [People]
    planets: [Planet]
    url: String
    created: String
    edited: String
  }


  type People {
    id: ID!
    name: String
    birth_year: String
    eye_color: String
    gender: String
    hair_color: String
    height: String
    mass: String
    skin_color: String
    homeworld: String
    films: [Film]
    species: [Species]
    starships: [Starship]
    vehicles: [Vehicle]
    url: String
    created: String
    edited: String
  }
  

  type Planet {
    id: ID!
    name: String
    diameter: String
    rotation_period: String 
    orbital_period: String
    gravity: String
    population: String
    climate: String
    terrain: String
    surface_water: String
    residents: [People]
    films: [Film]
    url: String
    created: String
    edited: String
  }


  type Species {
    id: ID!
    name: String
    classification: String
    designation: String
    average_height: String
    average_lifespan: String
    eye_colors: String
    hair_colors: String
    skin_colors: String
    language: String
    homeworld: String
    people: [People]
    films: [Film]
    url: String
    created: String
    edited: String
  }


  type Starship {
    id: ID!
    name: String
    model: String
    starship_class: String
    manufacturer: String
    cost_in_credits: String
    length: String
    crew: String
    passengers: String
    max_atmosphering_speed: String
    hyperdrive_rating: String
    MGLT: String
    cargo_capacity: String
    consumables: String 
    films: [Film]
    pilots: [People]
    url: String
    created: String
    edited: String
  }


  type Vehicle {
    id: ID!
    name: 
    model: 
    vehicle_class: 
    manufacturer: 
    length: 
    cost_in_credits: 
    crew:
    passengers: 
    max_atmosphering_speed: 
    cargo_capacity: 
    consumables: 
    films: 
    pilots: 
    url: 
    created: 
    edited: 
  }
`


// Exports
export default TYPEDEFS;