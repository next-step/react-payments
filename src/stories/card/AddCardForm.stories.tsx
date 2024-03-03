import type { Meta, StoryObj } from '@storybook/react';

import AddCardFormComponent from 'src/components/AddCardForm.tsx';

const meta: Meta<typeof AddCardFormComponent> = {
	title: 'card/AddCardForm',
	component: AddCardFormComponent,
};

export default meta;

type Story = StoryObj<typeof AddCardFormComponent>;

export const AddCardForm: Story = {
	render: () => {
		return <AddCardFormComponent />;
	},
};
