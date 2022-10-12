// https://docs.codecov.com/docs/codecov-uploader
/* eslint-disable prefer-destructuring */
const getJestSetup = require('@papillonbits/library/jest').getJestSetup

const testPathIgnorePatterns = []
const coverageDirectory = './.coverage/'
const collectCoverage = true
const collectCoverageFrom = [
  '!**/.mock/**',
  '!**/.storybook/**',
  '!**/.storybook-static/**',
  '!**/coverage/**',
  '!**/node_modules/**',
  'src/**/**/*.{js,jsx}',
  '!src/**/**/index.js',
  '!src/**/**/*.story.js',
  '!src/**/**/*.test.js',
]
const coverageThreshold = {
  global: {
    statements: 100,
    branches: 100,
    functions: 100,
    lines: 100,
  },
}

module.exports = getJestSetup({ testPathIgnorePatterns, coverageDirectory, collectCoverage, collectCoverageFrom, coverageThreshold })
