/* eslint-disable linebreak-style */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks/styleMock.js',
    '\\.(css|less|sass|scss)$': '<rootDir>/mocks/fileMock.js',
  },
  testMatch: ['*/__tests__/*.test.js'],
  testRegex: '(/__tests__/.*|(\\.|/)(test))\\.js$',
  esModuleInterop: true,
  transform: {
    '^.+\\.ts?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  transformIgnorePatterns: ['node_modules/(?!@ngrx|(?!deck.gl)|ng-dynamic)'],
  scriptPreprocessor: '<rootDir>/node_modules/babel-jest',
  unmockedModulePathPatterns: [
    '<rootDir>/node_modules/react',
    '<rootDir>/node_modules/fbjs',
    '<rootDir>/node_modules/react-dom',
    '<rootDir>/node_modules/react-addons-test-utils',
  ],
  type: 'module',
};
	testEnvironment: "jsdom",
	setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
	collectCoverage: true,
	coverageDirectory: "coverage",
	moduleNameMapper: {
		"\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
		"\\.(css|less)$": "<rootDir>/mocks/fileMock.js"
	},
	modulePaths: [
        "<rootDir>/src"
    ],
}
