import react from '@vitejs/plugin-react';
import path from 'path';
import type { ConfigEnv } from 'vite';
import { defineConfig } from 'vite';

export default (args: ConfigEnv) => {
  const generateScopedName =
    args.mode === 'production' ? '[local]___[hash:base64:5]' : '[local]';
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
    },
    css: {
      modules: {
        localsConvention: 'camelCase',
        generateScopedName: generateScopedName,
      },
    },
  });
};
