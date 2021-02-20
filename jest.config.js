
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults } = require('jest-config');

module.exports = {
  preset: 'ts-jest',
  coveragePathIgnorePatterns: [
    ...defaults.coveragePathIgnorePatterns,
    '/dist/'
  ],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  },
  moduleNameMapper: {
    '^.+\\.(css|scss)$': 'identity-obj-proxy'
  }
};