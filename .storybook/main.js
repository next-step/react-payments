const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": resolve(__dirname, "../src/components"),
      "@pages": resolve(__dirname, "../src/pages"),
      "@common": resolve(__dirname, "../src/common"),
      "@styles": resolve(__dirname, "../src/styles"),
      "@hooks": resolve(__dirname, "../src/hooks"),
    };
    return config;
  },
};
