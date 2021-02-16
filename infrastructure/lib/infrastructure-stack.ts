import * as cdk from '@aws-cdk/core';
import { ServerlessUI } from '@serverlessui/construct';
import { Source } from '@aws-cdk/aws-s3-deployment';
import { Table, AttributeType, ProjectionType } from '@aws-cdk/aws-dynamodb';
import { Order } from '../../@types/generated-graphql-resolvers';

export const TABLE_NAME = 'test-table';

type SecondaryIndexNonKeyAttribute = keyof Omit<Order, 'customerFullName'>;

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'Table', {
      partitionKey: { name: 'PK', type: AttributeType.STRING },
      sortKey: { name: 'SK', type: AttributeType.STRING },
    });

    const nonKeyAttributes: SecondaryIndexNonKeyAttribute[] = [
      'id',
      'status',
      'totalPrice',
      'createdDate',
    ];

    table.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1PK', type: AttributeType.STRING },
      sortKey: { name: 'GSI1SK', type: AttributeType.STRING },
      projectionType: ProjectionType.INCLUDE,
      nonKeyAttributes,
    });

    const { functions } = new ServerlessUI(this, 'ServerlessUI', {
      uiSources: [Source.asset(`${__dirname}/../../build`)],
      apiEntries: [`${__dirname}/../../functions/graphql.ts`],
      apiEnvironment: {
        TABLE_NAME: table.tableName,
      },
    });

    functions.forEach((lambda) => {
      table.grantReadWriteData(lambda);
    });
  }
}
