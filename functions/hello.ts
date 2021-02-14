import type { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

const dynamodbClient = new DocumentClient();

export interface ProxyResponse {
  data: string;
}

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  console.log(JSON.stringify(event, null, 2));
  const result = await dynamodbClient
    .get({
      TableName: 'test-table',
      Key: {
        id: '12345',
      },
    })
    .promise();
  const response: ProxyResponse = {
    data: JSON.stringify(result.Item),
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
