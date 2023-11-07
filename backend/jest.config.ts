export default {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    "modulePaths": [
        "<rootDir>"
    ],
    "moduleNameMapper": {
        "^@root(.*)$": "<rootDir>/src$1",
        "^@controllers(.*)$": "<rootDir>/src/controllers$1",
        "^@interfaces(.*)$": "<rootDir>/src/interfaces$1",
        "^@lib(.*)$": "<rootDir>/src/lib$1",
        "^@models(.*)$": "<rootDir>/src/models$1",
        "^@query(.*)$": "<rootDir>/src/query$1",
        "^@services(.*)$": "<rootDir>/src/services$1",
        "^@utils(.*)$": "<rootDir>/src/utils$1"
    }   
};