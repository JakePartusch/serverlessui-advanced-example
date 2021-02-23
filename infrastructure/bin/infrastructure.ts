#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { customAlphabet } from 'nanoid';
import { InfrastructureStack } from '../lib/infrastructure-stack';

const app = new cdk.App();
const nanoid = customAlphabet('0123456789abcdef', 8);
const buildId = nanoid();

const prod = app.node.tryGetContext('prod');

const stackName = prod
  ? 'ServerlessUIAdvancedExample'
  : `ServerlessUIAdvancedExamplePreview${buildId}`;

new InfrastructureStack(app, stackName, {
  buildId: prod ? undefined : buildId,
});
