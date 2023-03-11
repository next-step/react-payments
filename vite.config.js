const vite = require('vite');
const defineConfig = vite.defineConfig;
const react = require('@vitejs/plugin-react');
const viteTsconfigPaths = require('vite-tsconfig-paths').default;

// https://vitejs.dev/config/
module.exports = defineConfig({
  plugins: [react(), viteTsconfigPaths()],
});
