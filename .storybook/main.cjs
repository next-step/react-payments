const viteTsconfig = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfig.default;
const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials','storybook-addon-react-router-v6'],
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    check: false,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    });
  },

};

