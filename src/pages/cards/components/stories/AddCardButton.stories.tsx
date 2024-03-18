import { AddCardButton } from '@pages/cards/components';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'PAGES/Cards/AddCardButton',
	component: AddCardButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AddCardButton>;

type Story = StoryObj<typeof AddCardButton>;

export const Default: Story = {
	render: () => <AddCardButton />,
};

export default meta;
