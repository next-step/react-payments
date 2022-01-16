module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ["./jest.setup.js", "jest-plugin-context/setup"],
  testEnvironment: "jsdom",
};
