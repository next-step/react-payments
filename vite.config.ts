import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
      { find: '@context', replacement: '/src/context' },
      { find: '@styles', replacement: '/src/styles' },
      { find: '@utils', replacement: '/src/utils' },
      { find: '@entities', replacement: '/src/entities' },
      { find: '@repositories', replacement: '/src/repositories' },
    ],
  },
});
