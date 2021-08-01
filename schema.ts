import { gql } from 'apollo-server-lambda';

export default gql`
  scalar Date

  schema {
    query: Query
  }

  type Query {
    findOrders(statuses: [Status!]!): [Order]
  }

  enum Status {
    PENDING
    SHIPPED
    DELIVERED
  }

  interface Node {
    id: ID!
  }

  type Order implements Node {
    id: ID!
    customer: Customer!
    totalPrice: Int!
    status: Status!
    createdDate: Date!
  }

  type Customer implements Node {
    id: ID!
    firstName: String!
    lastName: String!
    fullName: String!
  }
`;
