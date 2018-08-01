// Imports: GraphQL
import { gql } from 'apollo-server-express';


// GraphQL: TypeDefs
const TYPEDEFS = gql`

  type Query {
    getFilmByID(id: ID): Film
    getAllFilms: AllFilms
    getPeopleByID(id: ID): People
    getAllPeople: AllPeople
    getPlanetByID(id: ID): Planet
    getAllPlanets: AllPlanets
    getSpeciesByID(id: ID): Species
    getAllSpecies: AllSpecies
    getStarshipByID(id: ID): Starship
    getAllStarships: AllStarships
    getVehicleByID(id: ID): Vehicle
    getAllVehicles: AllVehicles
  }

  type AllFilms {
    count: Int
    previous: String
    next: String
    results: [Film]
  }

  type AllPeople {
    count: Int
    previous: String
    next: String
    results: [People]
  }

  type AllPlanets {
    count: Int
    previous: String
    next: String
    results: [Planet]
  }

  type AllSpecies {
    count: Int
    previous: String
    next: String
    results: [Species]
  }

  type AllStarships {
    count: Int
    previous: String
    next: String
    results: [Starship]
  }

  type AllVehicles {
    count: Int
    previous: String
    next: String
    results: [Vehicle]
  }

  type Film {
    title: String!
    episode_id: Int!
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    characters: [People]
    planets: [Planet]
    starships: [Starship]
    vehicles: [Vehicle]
    species: [Species]
    created: String
    edited: String
    url: String
  }

  type People {
    name: String
    height: String
    mass: String
    hair_color: String
    skin_color: String
    eye_color: String
    birth_year: String
    gender: String
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
    name: String
    rotation_period: String 
    orbital_period: String
    diameter: String
    climate: String
    gravity: String
    terrain: String
    surface_water: String
    population: String
    residents: [People]
    films: [Film]
    created: String
    edited: String
    url: String
  }

  type Species {
    name: String
    classification: String
    designation: String
    average_height: String
    skin_colors: String
    hair_colors: String
    eye_colors: String
    average_lifespan: String
    homeworld: String
    language: String
    people: [People]
    films: [Film]
    created: String
    edited: String
    url: String
  }

  type Starship {
    name: String
    model: String
    manufacturer: String
    cost_in_credits: String
    length: String
    max_atmosphering_speed: String
    crew: String
    passengers: String
    cargo_capacity: String
    consumables: String 
    hyperdrive_rating: String
    MGLT: String
    starship_class: String
    pilots: [People]
    films: [Film]
    created: String
    edited: String
    url: String
  }

  type Vehicle {
    name: String
    model: String
    manufacturer: String
    cost_in_credits: String 
    length: String
    max_atmosphering_speed: String
    crew: String
    passengers: String
    cargo_capacity: String
    consumables: String
    vehicle_class: String
    pilots: [People]
    films: [Film]
    created: String
    edited: String
    url: String
  }
`


// Exports
export default TYPEDEFS;