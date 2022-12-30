/// <reference types="vitest" />
/// <reference types="vite/client" />

import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const pathResolve = (dir: string): string => {
  return resolve(__dirname, '.', dir);
};

const alias: Record<string, string> = {
  '@': pathResolve('src'),
  '@build': pathResolve('build'),
};

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
    port: 3000,
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
  resolve: { alias },
});
