// Cannot be in TypeScript except if https://www.npmjs.com/package/ts-node is installed
export default {
    "verbose": true,
    "projects": ['<rootDir>'],
    "testMatch": [
        '**/test/**/*.(ts|mts|cts)',
        '**/?(*.)+(spec|test).(ts|mts|cts)',
    ],
    "testPathIgnorePatterns": [
        '/(?:production_)?node_modules/',
        '.d.ts$',
        '<rootDir>/test/fixtures',
        '<rootDir>/test/helpers',
        '__mocks__',
    ],
    "transform": {
        '^.+\\.(m|c)?[jt]sx?$': 'babel-jest',
    },
    "moduleNameMapper": {
        '^(\\.\\/.+)\\.(js)$': '$1',
    }
}
