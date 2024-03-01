/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), vanillaExtractPlugin()],
  test: {
    globals: true,
    setupFiles: ['./src/tests/setup-tests.ts'],
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'jsdom',
    environmentOptions: {
      jsdom: {
        resources: 'usable',
      },
    },
  },
})
