import type { Preview } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';

import '../src/styles/index.css';
import results from '../.jest-test-results.json';

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
		withTests({
			results,
		}),
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
