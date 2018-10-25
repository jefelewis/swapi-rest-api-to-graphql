# GraphQL Star Wars API
A GraphQL version of the popular [Star Wars REST API](https://swapi.co)

## Built Using:
* [Node.js](https://nodejs.org/en) - JavaScript Runtime Environment
* [Express](https://expressjs.com) - Web framework
* [GraphQL](https://graphql.org) - Query Language
* [Apollo Server 2](https://www.apollographql.com/docs/apollo-server) - GraphQL Server
* [Babel](https://babeljs.io) - Transpiler/Transcompiler

## Getting Started:
**1. Install Dependencies**
```
npm install
```

**2. Start Server**
```
npm run server
```

**3. Execute GraphQL Queries Here (Browser Automatically Opens On Server Start)**
```
http://localhost:4000/graphql
```

## View GraphQL Schema:
The full schema can be viewed by clicking on the green "Schema" button on the right side.
![Schema](https://imgur.com/a/XIIOOOd.gif)

## Example Queries:
**Get All Star Wars Films**
```
{
  getAllFilms {
    count
    previous
    next
    results {
      title
      episode_id
      opening_crawl
      director
      producer
      release_date
      characters
      planets
      starships
      vehicles
      species
      created
      edited
      url
    }
  }
}
```


**Get Star Wars Film By ID**
```
{
  getFilmById(id: 1) {
    title
    episode_id
    opening_crawl
    director
    producer
    release_date
    characters 
    planets 
    starships
    vehicles
    species
    created
    edited
    url
  }
}
```
