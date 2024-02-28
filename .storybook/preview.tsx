import type { Preview } from '@storybook/react';

import '../src/styles/index.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		Story => (
			<div className="root">
				<div className="app">
					<Story />
				</div>
			</div>
		),
	],
};

export default preview;
