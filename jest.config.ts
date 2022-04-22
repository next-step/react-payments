export default {
  preset: 'ts-jest',
  clearMocks: true,
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.ts',
    'given2/setup',
    'jest-plugin-context/setup',
  ],
};
