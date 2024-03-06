import type { Meta, StoryObj } from '@storybook/react';

import CardNumberInputComponent from 'src/components/CardNumberInput.tsx';
import useCardNumberInput from 'src/hooks/useCardNumberInput.ts';

const meta: Meta<typeof CardNumberInputComponent> = {
	title: 'card/CardNumberInput',
	component: CardNumberInputComponent,
};

export default meta;

type Story = StoryObj<typeof CardNumberInputComponent>;

export const CardNumberInput: Story = {
	render: () => {
		const cardNumberInput = useCardNumberInput();

		return (
			<div>
				<CardNumberInputComponent {...cardNumberInput} />
			</div>
		);
	},
};
