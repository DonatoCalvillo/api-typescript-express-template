import convict from 'convict';

import dotenv from 'dotenv';
dotenv.config();

const variables = convict({
  server: {
    port: {
      doc: 'Port of the server.',
      format: 'Number',
      default: 8083,
      env: 'PORT'
    }
  },
  env: {
    doc: 'The application environment.',
    format: ['production', 'quality', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  }
});

variables.validate();

export { variables };
