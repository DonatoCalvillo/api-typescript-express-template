import { pathsToModuleNameMapper } from "ts-jest";
import { compilerOptions } from "./tsconfig.json";

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
  modulePaths: ["<rootDir>/src/"],
  transformIgnorePatterns: [
    "/node_modules/",
  ],
  testPathIgnorePatterns: ["<rootDir>/node_modules", "<rootDir>/dist"],
  extensionsToTreatAsEsm: [".ts"],
  modulePath: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths)
};
