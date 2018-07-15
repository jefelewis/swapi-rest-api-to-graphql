// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {
    getFilm(id: ID): Film
    getAllFilms: [Film]
    getPerson(id: ID): Person
    getAllPersons: [Person]
    getPlanet(id: ID): Planet
    getAllPlanets: [Planet]
    getSpecies(id: ID): Species
    getAllSpecies: [Species]
    getStarship(id: ID): Starship
    getAllStarships: [Starship]
    getVehicle(id: ID): Vehicle
    getAllVehicles: [Vehicle]
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
    characters: [Person]
    planets: [Planet]
    url: String
    created: String
    edited: String
  }


  type Person {
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
    residents: [Person]
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
    people: [Person]
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
    pilots: [Person]
    url: String
    created: String
    edited: String
  }


  type Vehicle {
    id: ID!
    name: String
    model: String
    vehicle_class: String
    manufacturer: String
    length: String
    cost_in_credits: String 
    crew: String
    passengers: String
    max_atmosphering_speed: String
    cargo_capacity: String
    consumables: String
    films: [Film]
    pilots: [Person]
    url: String
    created: String
    edited: String
  }
`


// Exports
export default TYPEDEFS;