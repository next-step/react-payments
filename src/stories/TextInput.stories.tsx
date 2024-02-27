import type { Meta, StoryObj } from '@storybook/react';

import TextInput from 'src/components/TextInput.tsx';

const meta: Meta<typeof TextInput> = {
	title: 'TextInput',
	component: TextInput,
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Basic: Story = {
	args: {
		type: 'text',
	},
};
