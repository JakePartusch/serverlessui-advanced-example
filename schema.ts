import { gql } from 'apollo-server-lambda';

export default gql`
  scalar Date

  schema {
    query: Query
  }

  type Query {
    allOrders: [Order]
  }

  enum Status {
    PENDING
    SHIPPED
    COMPLETE
  }

  interface Node {
    id: ID!
  }

  type Order implements Node {
    id: ID!
    customerFullName: String!
    totalPrice: Int!
    status: Status!
    createdDate: Date!
  }
`;
