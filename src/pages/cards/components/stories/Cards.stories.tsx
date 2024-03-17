import { Meta, StoryObj } from '@storybook/react';
import { Cards } from '@pages/cards/components';
import { CardsProvider } from '@contexts';

const meta = {
	title: 'PAGES/Cards/Cards',
	component: Cards,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Cards>;

type Story = StoryObj<typeof Cards>;

export const Default: Story = {
	render: () => (
		<CardsProvider>
			<Cards />,
		</CardsProvider>
	),
};

export default meta;
