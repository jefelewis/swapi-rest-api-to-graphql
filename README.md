# GraphQL Star Wars API
A GraphQL version of the popular [Star Wars REST API](https://swapi.co)

## Built With
* [Node.js](https://nodejs.org/en) - JavaScript Runtime Environment
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started
**1. Install Dependencies:**
```
npm install
```

**2. Start Server:**
```
npm run server
```

**3. Execute GraphQL Queries Here (Browser Automatically Opens On Server Start):**
```
http://localhost:4000/graphql
```

## View GraphQL Schema
The full schema can be viewed by clicking on the green "Schema" button on the right side.
![Schema](https://imgur.com/a/XIIOOOd.gif)

## Example Queries
**Get Star Wars Film By ID:**
```
{
  getFilmById(id: 1) {
    title
    episode_id
    opening_crawl
    director
    producer
    release_date
    characters {
      name
      height
      mass
      hair_color
      skin_color
      eye_color
      birth_year
      homeworld
      url
      created
      edited
    }
    planets {
			name
      rotation_period
      orbital_period
      diameter
      climate
      gravity
      terrain
      surface_water
      population
      created
      edited
      url
    }
    starships {
			name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      hyperdrive_rating
      MGLT
      starship_class
      created
      edited
      url
    }
    vehicles {
			name
      model
      manufacturer
      cost_in_credits
      length
      max_atmosphering_speed
      crew
      passengers
      cargo_capacity
      consumables
      vehicle_class
      created
      edited
      url
    }
    species {
    	name
      classification
      designation
      average_height
      skin_colors
      hair_colors
      eye_colors
      average_lifespan
      homeworld
      language
      created
      edited
      url
    }
    created
    edited
    url
  }
}
```
