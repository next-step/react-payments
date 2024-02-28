import type { Meta, StoryObj } from '@storybook/react';

import ButtonComponent from 'src/components/Button.tsx';

const meta: Meta<typeof ButtonComponent> = {
	title: 'atoms/Button',
	component: ButtonComponent,
};

type Story = StoryObj<typeof ButtonComponent>;

export default meta;

export const Button: Story = {
	args: {
		children: 'Click me',
	},
};
