import { ApolloServer } from 'apollo-server-lambda';
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { Order, Resolvers } from '../@types/generated-graphql-resolvers';
import typeDefs from '../schema';

const dynamoClient = new DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

const fetchAllOrders = async (): Promise<Order[]> => {
  const query: DynamoDB.DocumentClient.ScanInput = {
    TableName: process.env.TABLE_NAME,
  };
  const results = await dynamoClient.scan(query).promise();
  return results.Items as Order[];
};

const resolvers: Resolvers = {
  Query: {
    allOrders: async (_parent): Promise<Order[]> => {
      return await fetchAllOrders();
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/prod/api/graphql',
  },
});

export const handler = server.createHandler();
