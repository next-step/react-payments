module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
    // '@storybook/addon-docs',
    // 'storybook-addon-react-docgen',
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     rule: {
    //       include: [path.resolve(__dirname, '../src')],
    //     },
    //     loaderOptions: {
    //       prettierConfig: { printWidth: 80, singleQuote: true },
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  // typescript: {
  //   reactDocgenTypescriptOptions: {
  //     compilerOptions: {
  //       allowSyntheticDefaultImports: false,
  //       esModuleInterop: false,
  //     },
  //   },
  // },
}
