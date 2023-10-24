// import { Config } from "@jest/types";
// /** @type {import('ts-jest/dist/types'.InitialOptionsTsJest)} */
// const config: Config.InitialOptions = {
//   // All imported modules in your tests should be mocked automatically
//   automock: true,

//   // Indicates whether the coverage information should be collected while executing the test
//   collectCoverage: true,

//   // Automatically clear mock calls, instances, contexts and results before every test
//   clearMocks: true,

//   // An array of glob patterns indicating a set of file for which coverage information should be collected
//   collectCoverageFrom: [
//     "src/**/*.{js,jsx}",
//     "src/**/*.{js,jsx}",
//     "!**/node_modules/**",
//   ],

//   coverageDirectory: "coverage",

//   // A preset that is used as a base for jests configuration
//   preset: "ts-jest",

//   // The test environment that will be used for testing
//   testEnvironment: "node",

//   // Indicates whether each individual test should be reported during the run
//   verbose: true,

//   testTimeout: 100000,
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",
//     "^.+\\.tsx?$": [
//       "ts-jest",
//       {
//         useESM: true,
//       },
//     ],
//   },
//   testMatch: [
//     "**/tests/**/*.+(ts|tsx|js)",
//     "**/(?!!+)(*.)+(spec|test).+(ts|tsx|js)",
//     "**/tests/e2e/**/*.e2e.spec.+(ts|tsx|js)",
//   ],
//   moduleNameMapper: {
//     "^@/(.*)$": "<rootDir>/src/$1",
//   },
//   modulePaths: ["<rootDir>/src/"],
//   transformIgnorePatterns: ["/node_modules/"],
//   testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
//   extensionsToTreatAsEsm: [".ts"],
// };

// export default config;

module.exports = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testTimeout: 100000,
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
      },
    ],
  },
  testMatch: [
    "**/tests/**/*.+(ts|tsx|js)",
    "**/(?!!+)(*.)+(spec|test).+(ts|tsx|js)",
    "**/tests/e2e/**/*.e2e.spec.+(ts|tsx|js)",
  ],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  modulePaths: ["<rootDir>/src/"],
  transformIgnorePatterns: [
    "/node_modules/", // Agrega las dependencias que requieres transformar aquí
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  extensionsToTreatAsEsm: [".ts"],
};
