const { resolve } = require('path')
module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: '@storybook/react',
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@/components': resolve(__dirname, '../src/components'),
      '@/pages': resolve(__dirname, '../src/pages'),
      '@/common': resolve(__dirname, '../src/common'),
    }
    return config
  },
}
