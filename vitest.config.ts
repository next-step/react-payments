import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/__test__/setupTests.ts',
    include: ['src/**/*.spec.ts', 'src/**/*.spec.tsx'],
    alias: {
      '@': path.resolve('./src'),
    },
  },
});
