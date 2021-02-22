# Serverless UI Advanced

This repository showcases a complex integration example for [Serverless UI](https://github.com/JakePartusch/serverlessui)

Technologies:

- Front-end: Snowpack + React + Apollo client
- Back-end: GraphQL + Apollo Server + DynamoDB
- Infrastructure: AWS CDK + Serverless UI construct

## Serverless UI integration

This repository uses the @serverlessui/construct package to directly integrate existing infrastructure with Serverless UI

```javascript
const { functions } = new ServerlessUI(this, 'ServerlessUI', {
  buildId: 'advanced-example',
  uiSources: [Source.asset(`${__dirname}/../../build`)],
  apiEntries: [`${__dirname}/../../functions/graphql.ts`],
  apiEnvironment: {
    TABLE_NAME: table.tableName,
  },
  domain: {
    domainName: 'serverlessui.app',
    hostedZone: HostedZone.fromHostedZoneAttributes(this, 'HostedZone', {
      hostedZoneId: 'Z1XXXXXXXXXXXXX',
      zoneName: 'serverlessui.app',
    }),
    certificate: Certificate.fromCertificateArn(
      this,
      'Certificate',
      'arn:aws:acm:us-east-1:xxxxxxxxxx:certificate/xxxxxx-xxxx-xxxx-xxxxxx',
    ),
  },
});
```
