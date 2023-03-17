const viteTsconfigPaths = require('vite-tsconfig-paths');
const tsconfigPaths = viteTsconfigPaths.default;

const { mergeConfig } = require('vite');

module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app"
  ],
  framework: "@storybook/react",
  core: {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return {
      ...config,
      ...mergeConfig(config, {
        plugins: [tsconfigPaths()],
        // Use the same "resolve" configuration as your app
        resolve: (await import('../vite.config.js')).default.resolve,
        // Add dependencies to pre-optimization
        optimizeDeps: {
          include: ['storybook-dark-mode'],
        },
      }),
      esbuild: {
        ...config.esbuild,
        jsxInject: `import React from 'react'`,
      },
      rollupOptions: {
        ...config.rollupOptions,
        // Externalize deps that shouldn't be bundled
        external: ["react", "react-dom"],
        output: {
          // Global vars to use in UMD build for externalized deps
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    };
  },
}
