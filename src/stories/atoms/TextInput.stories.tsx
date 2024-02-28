import type { Meta, StoryObj } from '@storybook/react';

import TextInputComponent from 'src/components/TextInput.tsx';

const meta: Meta<typeof TextInputComponent> = {
	title: 'atoms/TextInput',
	component: TextInputComponent,
};

export default meta;
type Story = StoryObj<typeof TextInputComponent>;

export const TextInput: Story = {
	args: {
		type: 'text',
	},
};
