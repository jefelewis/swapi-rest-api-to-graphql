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
    title: String!
    episode_id: Int!
    opening_crawl: String
    director: String
    producer: String
    release_date: String
    characters: [Person]
    planets: [Planet]
    starships: [Starship]
    vehicles: [Vehicle]
    species: [Species]
    created: String
    edited: String
    url: String
  }

  type Person {
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
    residents: [Person]
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
    people: [Person]
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
    pilots: [Person]
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
    pilots: [Person]
    films: [Film]
    created: String
    edited: String
    url: String
  }
`


// Exports
export default TYPEDEFS;