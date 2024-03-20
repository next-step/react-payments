import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';
import dts from 'vite-plugin-dts';

export default defineConfig({
	plugins: [react(), tsconfigPaths(), dts({ tsconfigPath: './tsconfig.lib.json' })],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.tsx'),
			name: 'nextstep-payments-gn0lee',
			formats: ['es', 'umd'],
			fileName: format => `nextstep-payments-gn0lee.${format}.js`,
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'zod', '@xstate/react', 'xstate', 'nanoid'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM',
					zod: 'zod',
					'@xstate/react': '@xstate/react',
					xstate: 'xstate',
					nanoid: 'nanoid',
				},
			},
		},
	},
});
