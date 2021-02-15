import { ApolloServer } from 'apollo-server-lambda';
import {
  QueryUserArgs,
  Resolvers,
  Role,
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
  },
};

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

export const handler = server.createHandler();
