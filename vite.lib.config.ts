import { defineConfig, mergeConfig } from 'vite'
import viteConfig from './vite.config'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default mergeConfig(
  viteConfig,
  defineConfig({
    plugins: [
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
    ],
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
  }),
)
