import { ApolloServer } from 'apollo-server-lambda';
import {
  Order,
  QueryUserArgs,
  Resolvers,
  Role,
  Status,
  User,
} from '../@types/generated-graphql-resolvers';
import typeDefs from '../schema';

const resolvers: Resolvers = {
  Query: {
    user: (_parent, { id }: QueryUserArgs): User => {
      return {
        id,
        email: 'test@gmail.com',
        role: Role.Admin,
        username: 'testuser',
      };
    },
    order: (_parent): Order[] => {
      return [
        {
          id: '12345',
          customerFullName: 'Molly Sanders',
          totalPrice: 1099,
          status: Status.Pending,
          createdDate: new Date().toISOString(),
        },
      ];
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

export const handler = server.createHandler();
