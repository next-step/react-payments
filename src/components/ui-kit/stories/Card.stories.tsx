import { Meta, StoryObj } from '@storybook/react';
import { Card } from '@components/ui-kit';

const meta = {
	title: 'COMMON/UI-KIT/Card',
	component: Card,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	args: {
		variant: 'small-card',
	},
} satisfies Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Basic: Story = {
	args: {
		variant: 'small-card',
	},
};

export default meta;
