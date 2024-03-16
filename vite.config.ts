import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{ find: '@components', replacement: '/src/components' },
			{ find: '@pages', replacement: '/src/pages' },
			{ find: '@hooks', replacement: '/src/hooks' },
			{ find: '@utils', replacement: '/src/utils' },
			{ find: '@contexts', replacement: '/src/contexts' },
			{ find: '@reducers', replacement: '/src/reducers' },
			{ find: '@types', replacement: '/src/types' },
			{ find: '@constants', replacement: '/src/constants' },
		],
	},
});
