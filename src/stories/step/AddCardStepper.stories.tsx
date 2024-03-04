import type { Meta, StoryObj } from '@storybook/react';

import AddCardStepperComponent from 'src/components/AddCardStepper.tsx';

const meta: Meta<typeof AddCardStepperComponent> = {
	title: 'step/AddCardStepper',
	component: AddCardStepperComponent,
};

export default meta;

type Story = StoryObj<typeof AddCardStepperComponent>;

export const AddCardStepper: Story = {
	args: {
		activeStep: 'list',
		changeActiveStep: (step: 'list' | 'form' | 'finish') => {
			console.log(step);
		},
	},
	argTypes: {
		activeStep: {
			control: {
				type: 'select',
				options: ['list', 'form', 'finish'],
			},
		},
	},
};
