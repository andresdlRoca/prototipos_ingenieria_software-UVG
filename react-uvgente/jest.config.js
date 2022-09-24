/* eslint-disable linebreak-style */
/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
module.exports = {
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
