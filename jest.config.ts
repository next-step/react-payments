export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'\\.(png|jpg|jpeg|gif|webp|svg)$': '<rootDir>/fileMock.js',
		'^src/(.*)$': ['<rootDir>/src/$1'],
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	modulePathIgnorePatterns: ['node_modules', 'jest-test-results.json'],
};
