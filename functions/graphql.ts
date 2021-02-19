import { ApolloServer } from 'apollo-server-lambda';
import DynamoDB from 'aws-sdk/clients/dynamodb';
import { Order, Resolvers, Status } from '../types/generated/graphql-resolvers';
import typeDefs from '../schema';

const dynamoClient = new DynamoDB.DocumentClient({
  apiVersion: '2012-08-10',
});

const fetchAllOrders = async (): Promise<Order[]> => {
  if (process.env.TABLE_NAME) {
    const query: DynamoDB.DocumentClient.ScanInput = {
      TableName: process.env.TABLE_NAME,
    };
    const results = await dynamoClient.scan(query).promise();
    return results.Items as Order[];
  }
  console.error('TABLE_NAME is not set');
  return [];
};

const fetchOrdersByStatusCode = async (status: Status): Promise<Order[]> => {
  if (process.env.TABLE_NAME) {
    const query: DynamoDB.DocumentClient.QueryInput = {
      TableName: process.env.TABLE_NAME,
      IndexName: 'GSI',
      KeyConditionExpression: 'GSI1PK = :GSI1PK',
      ExpressionAttributeValues: {
        ':GSI1PK': status,
      },
    };
    const results = await dynamoClient.query(query).promise();
    return results.Items as Order[];
  }
  console.error('TABLE_NAME is not set');
  return [];
};

const resolvers: Resolvers = {
  Query: {
    findOrders: async (_parent): Promise<Order[]> => {
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
