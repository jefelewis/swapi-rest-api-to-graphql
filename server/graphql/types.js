// Imports: GraphQL Resolvers
import RESOLVERS from './resolvers';


// GraphQL: TypeDefs
const TYPEDEFS = `
  type Query {

  }

  type Mutation {
  }

  








  type Book {
    id: ID!
    name: String!
    genre: String!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    authorId: ID!
    books: [Book!]
  }
`


// Exports
export default TYPEDEFS;