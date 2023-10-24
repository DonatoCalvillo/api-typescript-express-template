# API SKELETON

## Environments vars

This project uses the following environment variables:

| Name     | Description                   | Default Value   |
| -------- | ----------------------------- | --------------- |
| NODE_ENV | Environment that is running   | "development"   |
| PORT     | Port where is running the API | 8083            |

## Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version <= v18.16.1
- Install [NPM](https://nodejs.org/en/) version <= 9.5.1
- Install [Docker](https://www.docker.com/)

## Getting started

- Clone the repository

```
git clone  https://github.com/dev-vendmine/vendmine-api.git
```

- Install dependencies

```
cd api-express-ts-skeleton
npm install
```

- Build and run the project in development

```
npm run start:dev
```

Navigate to `http://localhost:8083`

- Health API status

  Health Endpoint : http://localhost:8083/api/health

- API Document endpoints

  Swagger-ui Endpoint : http://localhost:8083/api/docs

## TypeScript + Node

The main purpose of this repository is to show a project setup and workflow for writing microservice. The Rest APIs will be using the Swagger (OpenAPI) Specification.

## Commands

| Npm Script    | Description                                                                     |
| ------------- | ------------------------------------------------------------------------------- |
| `start`       | Runs full build and runs node on dist/index.ts. Can be invoked with `npm start` |
| `start:dev`   | Runs development node on src/index.ts. Can be invoked with `npm start:dev`      |
| `build`       | Full build. Runs all build tasks                                                |
| `build:clean` | Clean the build to production build                                             |
| `build:tsc`   | Compiles the ts to js                                                           |
| `test`        | Runs build and run tests using jest                                             |

## Testing

The tests are written in Mocha and the assertions done using Jest

```
"jest": "^29.7.0",
"supertest": "^6.3.3",
```

### Running tests using NPM Scripts

```
npm run test
```

Test files are created under test folder.
