export default {
	testEnvironment: 'jsdom',
	transform: {
		'^.+\\.tsx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'^.+\\.svg$': 'jest-svg-transformer',
		'\\.(css|less|sass|scss)$': 'identity-obj-proxy',
		'^src/(.*)$': ['<rootDir>/src/$1'],
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};
