import * as cdk from '@aws-cdk/core';
import { ServerlessUI } from '@serverlessui/construct';
import { Source } from '@aws-cdk/aws-s3-deployment';
import { Certificate } from '@aws-cdk/aws-certificatemanager';
import { HostedZone } from '@aws-cdk/aws-route53';
import {
  Table,
  AttributeType,
  ProjectionType,
  BillingMode,
} from '@aws-cdk/aws-dynamodb';
import { Order } from '../../types/generated/graphql-resolvers';
import { RemovalPolicy } from '@aws-cdk/core';

interface InfrastructureStackProps extends cdk.StackProps {
  buildId?: string;
}

type SecondaryIndexNonKeyAttribute = keyof Order;
export class InfrastructureStack extends cdk.Stack {
  constructor(
    scope: cdk.Construct,
    id: string,
    props: InfrastructureStackProps,
  ) {
    super(scope, id, props);

    const table = new Table(this, 'Table', {
      partitionKey: { name: 'PK', type: AttributeType.STRING },
      sortKey: { name: 'SK', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const nonKeyAttributes: SecondaryIndexNonKeyAttribute[] = [
      'id',
      'status',
      'totalPrice',
      'createdDate',
      'customerFullName',
    ];

    table.addGlobalSecondaryIndex({
      indexName: 'GSI1',
      partitionKey: { name: 'GSI1PK', type: AttributeType.STRING },
      sortKey: { name: 'GSI1SK', type: AttributeType.STRING },
      projectionType: ProjectionType.INCLUDE,
      nonKeyAttributes,
    });

    const { functions } = new ServerlessUI(this, 'ServerlessUI', {
      buildId: props?.buildId
        ? `advanced-example-${props.buildId}`
        : 'advanced-example',
      uiSources: [Source.asset(`${__dirname}/../../build`)],
      apiEntries: [`${__dirname}/../../functions/graphql.ts`],
      apiEnvironment: {
        TABLE_NAME: table.tableName,
      },
      domain: {
        domainName: 'serverlessui.app',
        hostedZone: HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
          hostedZoneId: 'Z10061011Y616GGTRN1OW',
          zoneName: 'serverlessui.app',
        }),
        certificate: Certificate.fromCertificateArn(
          this,
          'Certificate',
          'arn:aws:acm:us-east-1:857786057494:certificate/be831128-bb68-4fcd-b903-4d112d8fd2cd',
        ),
      },
    });

    functions.forEach((lambda) => {
      table.grantReadWriteData(lambda);
    });
  }
}
