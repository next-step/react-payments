import { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import { AddCardForm } from '@pages/addCard/components';

const meta = {
	title: 'AddCard/AddCardForm',
	component: AddCardForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AddCardForm>;

type Story = StoryObj<typeof AddCardForm>;

export const Default: Story = {
	render: () => (
		<BrowserRouter>
			<AddCardForm />
		</BrowserRouter>
	),
};

export default meta;
