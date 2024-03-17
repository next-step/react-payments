/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    dts({
      include: ['src'],
      exclude: [
        'node_modules',
        'dist',
        '**/*.stories.tsx',
        '**/*.test.ts*',
        './src/vite-env.d.ts',
        './src/main.tsx',
      ],
    }),
    vanillaExtractPlugin(),
  ],
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
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'sxungchxn-react-payments',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDom',
        },
      },
    },
  },
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
})
