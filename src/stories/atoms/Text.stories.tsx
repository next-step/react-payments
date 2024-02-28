import type { Meta, StoryObj } from '@storybook/react';

import TextComponent from 'src/components/Text.tsx';

const meta: Meta<typeof TextComponent> = {
	title: 'atoms/Text',
	component: TextComponent,
};

export default meta;

type Story = StoryObj<typeof TextComponent>;

export const Text: Story = {
	args: {
		children: 'This is a text',
	},
};
