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
		const { handleCardNumberChange, cardNumber, maxLength } = useCardNumberInput();

		return (
			<div>
				<CardNumberInputComponent
					value={cardNumber}
					onChange={handleCardNumberChange}
					maxLength={maxLength}
					type="text"
					id="card-number"
				/>
			</div>
		);
	},
};
