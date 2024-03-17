import { Meta, StoryObj } from '@storybook/react';

import { AddCardForm } from '@pages/addCard/components';
import { CardsProvider, StepperProvider } from '@contexts';

const meta = {
	title: 'PAGES/AddCard/AddCardForm',
	component: AddCardForm,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof AddCardForm>;

type Story = StoryObj<typeof AddCardForm>;

export const Default: Story = {
	render: () => (
		<CardsProvider>
			<StepperProvider>
				<AddCardForm />
			</StepperProvider>
		</CardsProvider>
	),
};

export default meta;
