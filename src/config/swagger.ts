export const swaggerConfiguration = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Skeleton API',
      version: '1.0.0',
      description: 'A simple api'
    },
    servers: [
      {
        url: 'http://localhost:8084'
      }
    ]
  },
  apis: ['./src/**/infrastructure/api/routes/*.ts']
};
