import * as cdk from '@aws-cdk/core';
import { ServerlessUI } from '@serverlessui/construct';
import { Source } from '@aws-cdk/aws-s3-deployment';
import { Table, AttributeType } from '@aws-cdk/aws-dynamodb';

export const TABLE_NAME = 'test-table';

export class InfrastructureStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'Table', {
      partitionKey: { name: 'id', type: AttributeType.STRING },
    });

    const { functions } = new ServerlessUI(this, 'ServerlessUI', {
      uiSources: [Source.asset(`${__dirname}/../../build`)],
      apiEntries: [`../functions/graphql.ts`],
      apiEnvironment: {
        TABLE_NAME: table.tableName,
      },
    });

    functions.forEach((lambda) => {
      table.grantReadWriteData(lambda);
    });
  }
}
