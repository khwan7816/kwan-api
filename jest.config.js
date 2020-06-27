module.exports = {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.ts?$',
  // moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleFileExtensions: ['ts', 'js'],
  testEnvironment: 'node',
  moduleNameMapper: {
    "@daos/(.*)": "<rootDir>/src/daos/$1",
    "@entities/(.*)": "<rootDir>/src/entities/$1",
    "@shared/(.*)": "<rootDir>/src/shared/$1",
    "@server": "<rootDir>/src/Server"
  },
  collectCoverage: true
  // collectCoverageFrom: ['src/**/*.ts']
};
