import type { Preview } from '@storybook/react';
import '../src/styles/input.css';
import '../src/styles/button.css';
import '../src/styles/card.css';
import '../src/styles/index.css';
import '../src/styles/utils.css';

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
			},
		},
	},
};

export default preview;
